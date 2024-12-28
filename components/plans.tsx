import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

const PlanCard = ({ title , price, features, ctaText, isPopular = false }: {title : string , price : number , features : Array<string> , ctaText : string , isPopular : boolean}) => (
  <Card className={`w-full max-w-sm mx-auto relative transform transition-all duration-300 hover:scale-105 ${isPopular ? 'border-primary shadow-lg' : ''}`}>
    {isPopular && (
      <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold rounded-bl-lg rounded-tr-lg">
        Most Popular
      </div>
    )}
    <CardHeader className="p-4 sm:p-6">
      <CardTitle className="text-xl sm:text-2xl font-bold">{title}</CardTitle>
      <CardDescription className="text-2xl sm:text-3xl font-semibold">${price}</CardDescription>
    </CardHeader>
    <CardContent className="p-4 sm:p-6">
      <ul className="space-y-3 sm:space-y-4">
        {features.map((feature : string, index : number) => (
          <li key={index} className="flex items-start space-x-3">
            <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600 text-sm sm:text-base">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter className="p-4 sm:p-6">
      <Button 
        className={`w-full text-base sm:text-lg font-medium ${
          isPopular ? 'bg-primary hover:bg-primary/90' : ''
        }`}
      >
        {ctaText}
      </Button>
    </CardFooter>
  </Card>
)

export default function Plans() {
  const landingPageFeatures = [
    "Custom landing page",
    "Waitlist / signup component",
    "SEO optimization",
    "Email automation"
  ]

  const mvpFeatures = [
    "Full SaaS development",
    "Payments integration",
    "Auth and Database",
    "Setup and Deployment",
    "SEO optimization"
  ]

  return (
    <div className="w-full">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <PlanCard
            title="Landing Page"
            price={100}
            features={landingPageFeatures}
            ctaText="Get Started"
            isPopular={false}
          />
          <PlanCard
            title="MVP Development"
            price={799}
            features={mvpFeatures}
            ctaText="Build Your MVP"
            isPopular={true}
          />
        </div>
      </div>
    </div>
  )
}