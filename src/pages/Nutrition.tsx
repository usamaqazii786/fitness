import React, { useState, useEffect } from "react";
import axios from "axios";
import { Plus, Trash2, PieChart, Calendar, Edit2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MealEntry {
  _id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  time: string;
}

export function Nutrition() {
  const [meals, setMeals] = useState<MealEntry[]>([]);
  const [newMeal, setNewMeal] = useState({
    name: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
    time: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);  // For edit mode
  const [currentMealId, setCurrentMealId] = useState<string | null>(null);  // Track meal ID being edited

     const navigate = useNavigate();
  
      const token = localStorage.getItem("token");
    
   

  useEffect(() => {
    if (!token) {
      // alert("You need to log in to view the community.");
      // window.location.href = "/login";
      navigate('/login')
      return;
    }
    fetchMeals();
  }, [token]);

  const fetchMeals = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get("http://localhost:5001/api/meals");
      setMeals(response.data || []);
    } catch (error) {
      setError("Failed to fetch meals. Please try again later.");
      console.error("Error fetching meals:", error);
    } finally {
      setLoading(false);
    }
  };

  const addMeal = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const meal = {
        name: newMeal.name,
        calories: Number(newMeal.calories),
        protein: Number(newMeal.protein),
        carbs: Number(newMeal.carbs),
        fat: Number(newMeal.fat),
        time: newMeal.time || new Date().toLocaleTimeString(),
      };

      const response = await axios.post("http://localhost:5001/api/meals", meal);
      setMeals((prevMeals) => [...prevMeals, response.data]);
      setNewMeal({ name: "", calories: "", protein: "", carbs: "", fat: "", time: "" });
    } catch (error) {
      setError("Failed to add meal. Please try again.");
      console.error("Error adding meal:", error);
    }
  };

  const updateMeal = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!currentMealId) return;

    try {
      const meal = {
        name: newMeal.name,
        calories: Number(newMeal.calories),
        protein: Number(newMeal.protein),
        carbs: Number(newMeal.carbs),
        fat: Number(newMeal.fat),
        time: newMeal.time || new Date().toLocaleTimeString(),
      };

      const response = await axios.put(`http://localhost:5001/api/meals/${currentMealId}`, meal);
      setMeals((prevMeals) =>
        prevMeals.map((meal) =>
          meal._id === currentMealId ? response.data : meal
        )
      );
      setNewMeal({ name: "", calories: "", protein: "", carbs: "", fat: "", time: "" });
      setIsEditing(false);  // Reset edit mode
      setCurrentMealId(null);  // Reset meal ID
    } catch (error) {
      setError("Failed to update meal. Please try again.");
      console.error("Error updating meal:", error);
    }
  };

  const deleteMeal = async (mealId: string) => {
    try {
      if (!mealId) {
        console.error("Meal ID is missing");
        return;
      }
      const response = await axios.delete(`http://localhost:5001/api/meals/${mealId}`);
      console.log("Meal deleted successfully", response.data);
      fetchMeals();
    } catch (error) {
      console.error("Error deleting meal:", error);
    }
  };

  const totalNutrients = (Array.isArray(meals) ? meals : []).reduce(
    (acc, meal) => ({
      calories: acc.calories + (Number(meal.calories) || 0),
      protein: acc.protein + (Number(meal.protein) || 0),
      carbs: acc.carbs + (Number(meal.carbs) || 0),
      fat: acc.fat + (Number(meal.fat) || 0),
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  const MealCard = ({ meal }: { meal: MealEntry }) => (
    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
      <div>
        <h3 className="font-semibold">{meal.name}</h3>
        <p className="text-sm text-gray-600">
          {meal.calories} cal | P: {meal.protein}g | C: {meal.carbs}g | F: {meal.fat}g
        </p>
        <p className="text-sm text-gray-500">{meal.time}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => {
            setNewMeal({
              name: meal.name,
              calories: meal.calories.toString(),
              protein: meal.protein.toString(),
              carbs: meal.carbs.toString(),
              fat: meal.fat.toString(),
              time: meal.time,
            });
            setIsEditing(true);
            setCurrentMealId(meal._id);
          }}
          aria-label={`Edit meal: ${meal.name}`}
          className="text-blue-600 hover:text-blue-700"
        >
          <Edit2 className="w-5 h-5" />
        </button>
        <button
          onClick={() => deleteMeal(meal._id)}
          aria-label={`Delete meal: ${meal.name}`}
          className="text-red-600 hover:text-red-700"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Nutrition Tracking</h1>
          <p className="text-xl text-gray-600">Monitor your daily nutrition intake</p>
        </div>

        {/* Error Message */}
        {error && <p className="mb-4 text-red-600">{error}</p>}

        {/* Daily Summary */}
        <div className="p-6 mb-8 bg-white rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <PieChart className="w-6 h-6 mr-2 text-indigo-600" />
            <h2 className="text-2xl font-semibold">Daily Summary</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {["Calories", "Protein (g)", "Carbs (g)", "Fat (g)"].map((label, index) => {
              const values = [
                totalNutrients.calories,
                totalNutrients.protein,
                totalNutrients.carbs,
                totalNutrients.fat,
              ];
              return (
                <div key={label} className="p-4 rounded-lg bg-indigo-50">
                  <p className="text-gray-600">{label}</p>
                  <p className="text-2xl font-bold text-indigo-600">{values[index]}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Add/Edit Meal Form */}
        <div className="p-6 mb-8 bg-white rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <Plus className="w-6 h-6 mr-2 text-indigo-600" />
            <h2 className="text-2xl font-semibold">{isEditing ? "Edit Meal" : "Add Meal"}</h2>
          </div>
          <form
            onSubmit={isEditing ? updateMeal : addMeal}
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {[  
              { placeholder: "Meal name", value: newMeal.name, key: "name", type: "text" },
              { placeholder: "Calories", value: newMeal.calories, key: "calories", type: "number" },
              { placeholder: "Protein (g)", value: newMeal.protein, key: "protein", type: "number" },
              { placeholder: "Carbs (g)", value: newMeal.carbs, key: "carbs", type: "number" },
              { placeholder: "Fat (g)", value: newMeal.fat, key: "fat", type: "number" },
            ].map(({ placeholder, value, key, type }) => (
              <input
                key={key}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setNewMeal({ ...newMeal, [key]: e.target.value })}
                className="border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
                min={type === "number" ? 0 : undefined}
              />
            ))}
            <button
              type="submit"
              className="px-4 py-2 text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700"
            >
              {isEditing ? "Update Meal" : "Add Meal"}
            </button>
          </form>
        </div>

        {/* Meal List */}
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <Calendar className="w-6 h-6 mr-2 text-indigo-600" />
            <h2 className="text-2xl font-semibold">Today's Meals</h2>
          </div>
          <div className="space-y-4">
            {loading ? (
              <p className="text-center text-gray-500">Loading meals...</p>
            ) : meals.length === 0 ? (
              <p className="py-4 text-center text-gray-500">No meals logged today</p>
            ) : (
              Array.isArray(meals) ? meals.map((meal, index) => (
                <MealCard key={index} meal={meal} />
              )): []
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
