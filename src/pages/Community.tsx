import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MessageSquare,
  ThumbsUp,
  Share2,
  Users,
  Trophy,
  Calendar,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Community() {
  const [posts, setPosts] = useState<{ _id: string; comments: any[] }[]>([]);;
  const [challenges, setChallenges] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      alert("You need to log in to view the community.");
      // window.location.href = "/login";
      navigate('/login')
      return;
    }

    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get("http://localhost:5001/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(userResponse.data);

        const [postsResponse, challengesResponse, postsCommentResponse] = await Promise.all([
          axios.get("http://localhost:5001/posts", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("http://localhost:5001/challenges", {
            headers: { Authorization: `Bearer ${token}` },
          }),
           await axios.get("http://localhost:5001/posts", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
            setPosts(postsCommentResponse.data);

        setPosts(postsResponse.data);
        setChallenges(challengesResponse.data);
      } catch (error) {
        if (error.response?.status === 401) {
          alert("Session expired or invalid token. Please log in again.");
          localStorage.removeItem("token");
          // window.location.href = "/login";
          navigate('/login')
        } else {
          setError("Error fetching data. Please try again.");
        }
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [token]);

  const handlePostSubmit = async () => {
    if (!newPostContent.trim()) {
      alert("Post content cannot be empty.");
      return;
    }

    try {
      const newPost = {
        author: {
          name: user?.name || "salman",
          image:
            user?.image ||
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        },
        content: newPostContent,
      };

      const response = await axios.post(
        "http://localhost:5001/posts",
        newPost,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response, "response==>");
      setPosts([response.data, ...posts]);
      setNewPostContent("");
    } catch (err) {
      console.error("Error posting new post:", err);
      alert("Error posting your content. Please try again.");
    }
  };
  
  const deletePost = async (postId: string) => {
    try {
      if (!postId) {
        console.error("Meal ID is missing");
        return;
      }
      const response = await axios.delete(`http://localhost:5001/posts/${postId}`);
      console.log("Meal deleted successfully", response.data);
    } catch (error) {
      console.error("Error deleting meal:", error);
    }
  };

  const handleShare = async (postId) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/posts/${postId}/share`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId ? { ...post, shares: response.data.shares } : post
        )
      );
    } catch (error) {
      console.error("Error sharing post:", error);
      alert("Failed to share post. Try again.");
    }
  };

  const handleCommentSubmit = async (postId, commentData) => {
    if (!commentData.trim()) {
      alert("Comment cannot be empty.");
      return;
    }

    const newComment = {
      comment: commentData,
      user: user?.name || "Anonymous",
    };

    console.log(newComment);

    try {
      const response = await axios.post(
        `http://localhost:5001/posts/${postId}/comment`,
        newComment,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId
            ? {
                ...post,
                comments: Array.isArray(response.data.comments) ? [...post.comments, response.data.comments.slice(-1)[0]] : post.comments
                // comments: [...post.comments, response.data.comments.pop()],
              }
            : post
        )
      );
      console.log("Comment added successfully:", response.data);
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Failed to add comment. Please try again.");
    }
  };

  const deleteComment = async (postId: string, commentId: string) => {
    if (!postId || !commentId) {
      console.error("Missing postId or commentId", { postId, commentId });
      alert("Comment ID is missing, cannot delete.");
      return;
    }
  
    try {
      const response = await axios.delete(
        `http://localhost:5001/posts/${postId}/comments/${commentId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Comment deleted successfully", response.data);
  
      // ✅ Update state after deleting comment
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId
            ? { ...post, comments: post.comments.filter((c) => c._id !== commentId) }
            : post
        )
      );
    } catch (error) {
      console.error("Error deleting comment:", error);
      alert("Failed to delete comment. Try again.");
    }
  };
  

  // const deleteComment = async (postId: string, commentId: string) => {
  //   try {
  //     if (!postId) {
  //       console.error("Meal ID is missing");
  //       return;
  //     }
  //     const response = axios.delete(`/posts/${postId}/comments/${commentId}`)
  //     console.log("Meal deleted successfully", response.data);
  //   } catch (error) {
  //     console.error("Error deleting meal:", error);
  //   }
  // };

 

  const handleLike = async (postId) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/posts/${postId}/like`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId ? { ...post, likes: response.data.likes } : post
        )
      );
    } catch (error) {
      console.error("Error liking post:", error);
      alert("Failed to like post. Try again.");
    }
  };

  const handleJoinChallenge = async (challengeId) => {
    if (!challengeId) {
      alert("Invalid challenge ID. Please try again.");
      return;
    }
  
    try {
      const response = await axios.post(
        `http://localhost:5001/challenges/${challengeId}/join`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
  
      setChallenges((prevChallenges) =>
        prevChallenges.map((challenge) =>
          challenge._id === challengeId
            ? { ...challenge, participants: response.data.participants }
            : challenge
        )
      );
  
      alert("You have joined the challenge successfully!");
    } catch (error) {
      console.error("Error joining challenge:", error);
      alert("Failed to join challenge. Try again.");
    }
  };
  
  

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-12 text-white bg-indigo-600">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold">Fitness Tracker Community</h1>
          <p className="text-xl">
            Connect, share, and grow with fellow fitness enthusiasts
          </p>
        </div>
      </div>

      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Feed */}
          <div className="space-y-6 lg:col-span-2">
            {/* Create Post */}
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="flex items-center mb-4 space-x-4">
                {user && user.image ? (
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-12 h-12 rounded-full"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-300 rounded-full" />
                )}
                <input
                  type="text"
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  placeholder="Share your fitness journey..."
                  className="flex-1 border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handlePostSubmit}
                  className="px-4 py-2 text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700"
                >
                  Post
                </button>
              </div>
            </div>

            {/* Posts */}
            {error ? (
              <div className="text-red-500">{error}</div>
            ) : posts?.length ? (
              posts.map((post) => (
                <div
                  key={post._id}
                  className="p-6 bg-white rounded-lg shadow-sm"
                >
                  <div className="flex items-center mb-4 space-x-4">
                    <img
                      src={post.author.image}
                      alt={post.author?.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{post.author.name}</h3>
                      <p className="text-sm text-gray-500">{post.time}</p>
                    </div>
                  </div>
                  {/* <p className="mb-4 text-gray-800">{post.content}</p> */}
                  <div className="flex items-center space-x-6 text-gray-500">
                    <button
                      className="flex items-center space-x-2 hover:text-indigo-600"
                      onClick={() => handleLike(post._id)}
                    >
                      <ThumbsUp
                        className={`w-5 h-5 ${
                          post.likes + likedPosts.has(post.id)
                            ? "fill-current text-indigo-600"
                            : ""
                        }`}
                      />
                      <span>
                        {post.likes + (likedPosts.has(post._id) ? 1 : 0)}
                      </span>
                    </button>
                    <button
                      className="flex items-center space-x-2 hover:text-indigo-600"
                      // onClick={() =>
                      //   handleCommentSubmit(post._id, "Nice post!")
                      // }
                    >
                      <MessageSquare className="w-5 h-5" />
                      <span>{post?.comments?.length}</span>
                    </button>
                    {/* {(post?.comments || []).map((comment, index) => (
  <div key={index} className="ml-4 text-gray-600">
    <strong>{comment.user?.name || "Unknown"}:</strong> {comment.text}
  </div>
))} */}

                    <input
                      type="text"
                      placeholder="Write a comment..."
                      className="w-full p-2 mt-2 border rounded-md"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleCommentSubmit(post._id, e.currentTarget.value);
                          e.currentTarget.value = "";
                        }
                      }}
                    />

                    <button
                      className="flex items-center space-x-2 hover:text-indigo-600"
                      onClick={() => handleShare(post._id)}
                    >
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                    <button
          onClick={() => deletePost(post._id)}
          aria-label={`Delete comment: ${post.name}`}
          className="text-red-600 hover:text-red-700"
        >
          <Trash2 className="w-5 h-5" />
        </button>
                  </div>
                  {Array.isArray(post.comments) &&  post.comments.length > 0 ? (
  post.comments.map((comment, index) => (
    <div className="grid grid-cols-1 gap-8 shadow lg:grid-cols-3">
    <div key={index} className="p-2 mt-2 ml-4 text-gray-600 ">
      <strong>{comment.user || "Unknown"}</strong>:{" "}
      {typeof comment.comment === "string" ? comment.comment : "Invalid comment"}
    </div>
    <button
  onClick={() => deleteComment(post._id, comment._id)}  // ✅ Ensure both IDs are passed correctly
  aria-label={`Delete comment: ${comment.name}`}
  className="text-red-600 hover:text-red-700"
>
  <Trash2 className="w-5 h-5" />
</button>

    </div>
  ))
) : (
  <p className="ml-4 text-gray-400">No comments yet</p>
)}
                </div>
              ))
            ) : (
              <div>No posts yet. Be the first to post!</div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Active Challenges */}
            {/* <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="flex items-center mb-6 space-x-2">
                <Trophy className="w-6 h-6 text-indigo-600" />
                <h2 className="text-xl font-semibold">Active Challenges</h2>
              </div>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="pb-4 border-b last:border-0 last:pb-0"
                  >
                    <h3 className="mb-2 font-semibold">{challenge.title}</h3>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {challenge.participants} participants
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {challenge.daysLeft} days left
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => handleJoinChallenge(challenges._id)} className="w-full px-4 py-2 mt-4 text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700">
                Join a Challenge
              </button>
            </div> */}

{challenges.map((challenge, index) => (
  <div key={index} className="pb-4 border-b last:border-0 last:pb-0">
    <h3 className="mb-2 font-semibold">{challenge.title}</h3>
    <div className="flex justify-between text-sm text-gray-500">
      <span className="flex items-center">
        <Users className="w-4 h-4 mr-1" />
        {challenge.participants} participants
      </span>
      <span className="flex items-center">
        <Calendar className="w-4 h-4 mr-1" />
        {challenge.daysLeft} days left
      </span>
    </div>
    {/* 🛠️ FIX: Pass the correct challenge._id */}
    <button
      onClick={() => handleJoinChallenge(challenge._id)}
      className="w-full px-4 py-2 mt-4 text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700"
    >
      Join Challenge
    </button>
  </div>
))}


            {/* Trending Topics */}
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Trending Topics</h2>
              <div className="space-y-2">
                {[
                  "#MondayMotivation",
                  "#WorkoutTips",
                  "#HealthyEating",
                  "#FitnessCommunity",
                ].map((topic, index) => (
                  <div
                    key={index}
                    className="text-indigo-600 cursor-pointer hover:text-indigo-700"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
