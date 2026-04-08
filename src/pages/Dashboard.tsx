import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChefHat,
  Utensils,
  Star,
  Users,
  TrendingUp,
  Clock,
  Award,
  Heart,
} from "lucide-react";

const Dashboard = () => {
  const featuredDishes = [
    {
      name: "Truffle Pasta",
      price: "$24",
      rating: 4.9,
      image: "bg-gradient-to-br from-orange-400 to-red-400",
    },
    {
      name: "Grilled Salmon",
      price: "$28",
      rating: 4.8,
      image: "bg-gradient-to-br from-pink-400 to-red-400",
    },
    {
      name: "Chocolate Soufflé",
      price: "$18",
      rating: 5.0,
      image: "bg-gradient-to-br from-yellow-400 to-orange-400",
    },
  ];

  const stats = [
    {
      icon: Users,
      label: "Happy Customers",
      value: "10,000+",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Utensils,
      label: "Dishes Served",
      value: "50,000+",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Award,
      label: "Awards Won",
      value: "25+",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Star,
      label: "Average Rating",
      value: "4.9",
      color: "from-pink-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                DeliciousEats
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
                Welcome to Page
              </span>
              <br />
              <span className="text-gray-800">Culinary Dashboard</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover amazing dishes, track your favorites, and explore the
              full world of DeliciousEats
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-md border-orange-100 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Dishes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Today's Featured Dishes
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredDishes.map((dish, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-md border-orange-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <CardHeader className="p-0">
                    <div
                      className={`h-48 ${dish.image} rounded-t-lg flex items-center justify-center`}
                    >
                      <Utensils className="h-16 w-16 text-white opacity-80" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-gray-800">
                        {dish.name}
                      </CardTitle>
                      <span className="text-2xl font-bold text-orange-600">
                        {dish.price}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-gray-600">{dish.rating}</span>
                    </div>
                    <Button className="w-full mt-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/80 backdrop-blur-md border-orange-100 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Utensils className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-lg mb-2">Browse Menu</CardTitle>
                <CardDescription>Explore our full menu</CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-md border-orange-100 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-lg mb-2">Favorites</CardTitle>
                <CardDescription>View your saved dishes</CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-md border-orange-100 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg mb-2">Order History</CardTitle>
                <CardDescription>Track your past orders</CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-md border-orange-100 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg mb-2">Trending</CardTitle>
                <CardDescription>See what's popular</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
