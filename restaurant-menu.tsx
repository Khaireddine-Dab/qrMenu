"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Clock,
  MapPin,
  Phone,
  Star,
  Wine,
  ChefHat,
  Award,
  Leaf,
  Wheat,
  Heart,
  Globe,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Calendar,
  Users,
  CreditCard,
} from "lucide-react"

export default function Component() {
  const menuCategories = [
    {
      id: "amuse-bouche",
      name: "Amuse-Bouche",
      subtitle: "Chef's Welcome",
      description: "A single, perfect bite to awaken your palate",
      items: [
        {
          name: "Oyster Pearls",
          description: "Kumamoto oyster with champagne foam, caviar, and micro herbs",
          price: "Complimentary",
          chef: true,
          image: "/placeholder.svg?height=120&width=180",
        },
      ],
    },
    {
      id: "appetizers",
      name: "Première",
      subtitle: "First Course",
      description: "Artfully crafted beginnings to your culinary journey",
      items: [
        {
          name: "Hokkaido Scallops",
          description: "Pan-seared diver scallops, cauliflower velouté, pancetta crisps, truffle oil",
          price: "$28",
          popular: true,
          dietary: ["gluten-free"],
          wine: "Chablis Premier Cru",
          chef: true,
          image: "/images/img2.jpg",
        },
        {
          name: "Tuna Tataki",
          description: "Sesame-crusted yellowfin, wasabi aioli, pickled daikon, soy reduction",
          price: "$26",
          dietary: ["gluten-free"],
          wine: "Sancerre",
          image: "/placeholder.svg?height=120&width=180",
        },
        {
          name: "Foie Gras Terrine",
          description: "House-made terrine, brioche toast, fig compote, aged balsamic",
          price: "$32",
          wine: "Sauternes",
          premium: true,
          image: "/placeholder.svg?height=120&width=180",
        },
        {
          name: "Burrata Sublime",
          description: "Imported burrata, heirloom tomatoes, basil oil, aged modena, sea salt",
          price: "$22",
          dietary: ["vegetarian"],
          wine: "Pinot Grigio",
          image: "/placeholder.svg?height=120&width=180",
        },
      ],
    },
    {
      id: "mains",
      name: "Plat Principal",
      subtitle: "Main Course",
      description: "Our signature dishes, crafted with the finest ingredients",
      items: [
        {
          name: "Wagyu A5 Ribeye",
          description: "12oz Japanese A5 wagyu, roasted bone marrow, seasonal vegetables, bordelaise",
          price: "$125",
          popular: true,
          premium: true,
          wine: "Cabernet Sauvignon Reserve",
          chef: true,
          image: "/placeholder.svg?height=120&width=180",
        },
        {
          name: "John Dory Fillet",
          description: "Pan-roasted John Dory, saffron beurre blanc, fingerling potatoes, micro greens",
          price: "$42",
          dietary: ["gluten-free"],
          wine: "Chardonnay",
          image: "/placeholder.svg?height=120&width=180",
        },
        {
          name: "Duck Breast Confit",
          description: "Moulard duck breast, cherry gastrique, wild rice pilaf, baby vegetables",
          price: "$38",
          wine: "Pinot Noir",
          image: "/placeholder.svg?height=120&width=180",
        },
        {
          name: "Maine Lobster Thermidor",
          description: "Whole Maine lobster, cognac cream sauce, gruyère, herb crust",
          price: "$58",
          premium: true,
          wine: "Champagne",
          image: "/placeholder.svg?height=120&width=180",
        },
        {
          name: "Vegetable Wellington",
          description: "Seasonal vegetables, wild mushrooms, puff pastry, truffle jus",
          price: "$32",
          dietary: ["vegetarian"],
          wine: "Côtes du Rhône",
          chef: true,
          image: "/placeholder.svg?height=120&width=180",
        },
      ],
    },
    {
      id: "desserts",
      name: "Dessert",
      subtitle: "Sweet Finale",
      description: "Exquisite endings crafted by our pastry chef",
      items: [
        {
          name: "Valrhona Chocolate Soufflé",
          description: "70% dark chocolate soufflé, vanilla bean gelato, gold leaf",
          price: "$18",
          popular: true,
          chef: true,
          wine: "Port",
          image: "/placeholder.svg?height=120&width=180",
        },
        {
          name: "Mille-Feuille Moderne",
          description: "Deconstructed Napoleon, pastry cream, fresh berries, spun sugar",
          price: "$16",
          dietary: ["vegetarian"],
          wine: "Moscato",
          image: "/placeholder.svg?height=120&width=180",
        },
        {
          name: "Lemon Tart Sophistiqué",
          description: "Meyer lemon curd, almond sablé, Italian meringue, candied zest",
          price: "$14",
          dietary: ["vegetarian"],
          wine: "Riesling",
          image: "/placeholder.svg?height=120&width=180",
        },
      ],
    },
  ]

  const getDietaryIcon = (dietary: string) => {
    switch (dietary) {
      case "vegetarian":
        return <Leaf className="w-3 h-3" />
      case "vegan":
        return <Heart className="w-3 h-3" />
      case "gluten-free":
        return <Wheat className="w-3 h-3" />
      default:
        return null
    }
  }

  const getDietaryColor = (dietary: string) => {
    switch (dietary) {
      case "vegetarian":
        return "bg-emerald-50 text-emerald-700 border-emerald-200"
      case "vegan":
        return "bg-green-50 text-green-700 border-green-200"
      case "gluten-free":
        return "bg-blue-50 text-blue-700 border-blue-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Professional Header */}
      <header className="bg-white shadow-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          {/* Top Bar */}
          <div className="border-b border-stone-100 px-6 py-3">
            <div className="flex justify-between items-center text-sm text-stone-600">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>123 Culinary Boulevard, Downtown District</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-4567</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Dinner: 5:30 PM - 10:30 PM</span>
                </div>
                <div className="flex gap-2">
                  <Instagram className="w-4 h-4 hover:text-stone-900 cursor-pointer" />
                  <Facebook className="w-4 h-4 hover:text-stone-900 cursor-pointer" />
                  <Twitter className="w-4 h-4 hover:text-stone-900 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Header */}
          <div className="px-6 py-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center">
                  <ChefHat className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-serif text-stone-900 mb-2">Bella Vista</h1>
                  <div className="flex items-center justify-center gap-2 text-amber-600">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-xl text-stone-600 mb-4 font-light">
                Contemporary French Cuisine with Modern Innovation
              </p>

              <div className="flex justify-center items-center gap-8 text-sm text-stone-500">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Michelin Recommended</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>James Beard Nominated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Wine Spectator Award</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Chef's Message */}
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-stone-200">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif text-stone-900 mb-4">Chef's Philosophy</h2>
            <p className="text-stone-600 leading-relaxed italic">
              "Each dish tells a story of tradition meeting innovation. We source the finest ingredients from local
              artisans and global purveyors to create an unforgettable dining experience that honors both classic
              techniques and contemporary creativity."
            </p>
            <p className="text-stone-500 mt-4 text-sm">— Chef Marcus Beaumont, Executive Chef</p>
          </div>
        </div>

        {/* Menu Categories */}
        {menuCategories.map((category, categoryIndex) => (
          <section key={category.id} className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-serif text-stone-900 mb-2">{category.name}</h2>
              <p className="text-lg text-stone-600 font-medium mb-2">{category.subtitle}</p>
              <p className="text-stone-500 max-w-2xl mx-auto">{category.description}</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {category.items.map((item, itemIndex) => (
                <Card
                  key={itemIndex}
                  className="overflow-hidden bg-white shadow-sm border-stone-200 hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <div className="flex">
                      {/* Image */}
                      <div className="w-48 h-32 bg-stone-100 flex-shrink-0">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-stone-900">{item.name}</h3>
                              <div className="flex gap-1">
                                {item.popular && (
                                  <Badge className="bg-amber-100 text-amber-800 border-amber-200 text-xs">
                                    <Star className="w-3 h-3 mr-1 fill-current" />
                                    Popular
                                  </Badge>
                                )}
                                {item.chef && (
                                  <Badge className="bg-stone-100 text-stone-800 border-stone-200 text-xs">
                                    <ChefHat className="w-3 h-3 mr-1" />
                                    Chef's Choice
                                  </Badge>
                                )}
                                {item.premium && (
                                  <Badge className="bg-purple-100 text-purple-800 border-purple-200 text-xs">
                                    Premium
                                  </Badge>
                                )}
                              </div>
                            </div>

                            <p className="text-stone-600 text-sm leading-relaxed mb-3">{item.description}</p>

                            <div className="flex flex-wrap gap-2 mb-2">
                              {item.dietary?.map((diet) => (
                                <Badge key={diet} variant="outline" className={`text-xs ${getDietaryColor(diet)}`}>
                                  {getDietaryIcon(diet)}
                                  <span className="ml-1 capitalize">{diet.replace("-", " ")}</span>
                                </Badge>
                              ))}
                            </div>

                            {item.wine && (
                              <div className="flex items-center gap-2 text-xs text-stone-500">
                                <Wine className="w-3 h-3" />
                                <span>Pairs with: {item.wine}</span>
                              </div>
                            )}
                          </div>

                          <div className="text-right ml-4">
                            <span className="text-2xl font-semibold text-stone-900">{item.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {categoryIndex < menuCategories.length - 1 && <Separator className="mt-12 bg-stone-200" />}
          </section>
        ))}

        {/* Call to Action */}
        <div className="bg-stone-900 rounded-2xl p-8 text-center text-white mt-16">
          <h3 className="text-2xl font-serif mb-4">Reserve Your Table</h3>
          <p className="text-stone-300 mb-6 max-w-2xl mx-auto">
            Experience our tasting menu or à la carte selections. Reservations recommended for optimal dining
            experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-stone-900 hover:bg-stone-100 px-8 py-3">
              <Calendar className="w-4 h-4 mr-2" />
              Make Reservation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              <CreditCard className="w-4 h-4 mr-2" />
              Order Online
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              <Mail className="w-4 h-4 mr-2" />
              Private Events
            </Button>
          </div>
        </div>
      </main>

      {/* Professional Footer */}
      <footer className="bg-white border-t border-stone-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-semibold text-stone-900 mb-3">Location & Hours</h4>
              <div className="space-y-2 text-stone-600">
                <p>
                  123 Culinary Boulevard
                  <br />
                  Downtown District, City 12345
                </p>
                <p>Dinner: Tuesday - Sunday, 5:30 PM - 10:30 PM</p>
                <p>Closed Mondays</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-stone-900 mb-3">Policies</h4>
              <div className="space-y-2 text-stone-600">
                <p>Dress code: Smart casual to formal</p>
                <p>Cancellation: 24 hours notice required</p>
                <p>18% gratuity added to parties of 6+</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-stone-900 mb-3">Allergen Information</h4>
              <div className="space-y-2 text-stone-600">
                <p>Please inform your server of any allergies</p>
                <p>Detailed allergen menu available upon request</p>
                <p>Gluten-free and vegan options available</p>
              </div>
            </div>
          </div>
          <Separator className="my-6 bg-stone-200" />
          <div className="text-center text-xs text-stone-500">
            <p>© 2024 Bella Vista Restaurant. All rights reserved. | Prices subject to change without notice.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
