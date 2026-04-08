import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChefHat, Utensils, Users, Star } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Navigation */}
      <nav className="relative z-10 bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                DeliciousEats
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
              <a href="#menu" className="text-gray-700 hover:text-orange-600 transition-colors">Menu</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
              <Link to="/login">
                <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                  Sign Up
                </Button>
              </Link>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-gray-700"></div>
                <div className="w-6 h-0.5 bg-gray-700"></div>
                <div className="w-6 h-0.5 bg-gray-700"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-orange-100">
            <div className="px-4 py-4 space-y-3">
              <a href="#about" className="block text-gray-700 hover:text-orange-600">About</a>
              <a href="#menu" className="block text-gray-700 hover:text-orange-600">Menu</a>
              <a href="#contact" className="block text-gray-700 hover:text-orange-600">Contact</a>
              <Link to="/login" className="block">
                <Button variant="outline" className="w-full border-orange-600 text-orange-600">Login</Button>
              </Link>
              <Link to="/signup" className="block">
                <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600">Sign Up</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-red-400/20 to-yellow-400/20"></div>

        {/* Decorative food icons */}
        <div className="absolute inset-0 overflow-hidden">
          <Utensils className="absolute top-20 left-10 h-16 w-16 text-orange-300/30 animate-pulse" />
          <ChefHat className="absolute top-40 right-20 h-20 w-20 text-red-300/30 animate-bounce" />
          <Star className="absolute bottom-40 left-20 h-12 w-12 text-yellow-400/40 animate-pulse" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
                Delicious Food
              </span>
              <br />
              <span className="text-gray-800">
                Delivered Fresh
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the finest culinary delights crafted with passion and served with love. 
              From farm to table, every bite tells a story.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/login">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white text-lg px-8 py-4 rounded-full transition-all duration-300"
              >
                View Menu
              </Button>
            </div>
          </div>
        </div>

        {/* Floating food cards */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-10 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl flex items-center justify-center">
              <Utensils className="h-8 w-8 text-white" />
            </div>
            <p className="text-sm font-semibold text-gray-800 mt-2">Fresh Ingredients</p>
          </div>

          <div className="absolute top-1/3 right-10 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float-delayed">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <p className="text-sm font-semibold text-gray-800 mt-2">Expert Chefs</p>
          </div>

          {/* Uncomment this if needed
          <div className="absolute bottom-1/4 left-1/4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float">
            <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-400 rounded-xl flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <p className="text-sm font-semibold text-gray-800 mt-2">Happy Customers</p>
          </div>
          */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              Why Choose DeliciousEats?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to bringing you the most delicious and fresh food experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Fresh Ingredients</h3>
              <p className="text-gray-600">Sourced directly from local farms and premium suppliers for the freshest taste.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Expert Chefs</h3>
              <p className="text-gray-600">Our world-class chefs create culinary masterpieces that delight your senses.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">5-Star Quality</h3>
              <p className="text-gray-600">Every dish meets our highest standards for taste, presentation, and quality.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
