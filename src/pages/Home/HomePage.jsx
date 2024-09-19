import { useTitle } from "../../hooks/useTitle";
import { Hero } from "./components/Hero";
import { FeaturedProducts} from "./components/FeaturedProducts";
import { Testimonial} from "./components/Testimonial";
import { Faq } from "./components/Faq";
export const Homepage = () => {
    useTitle("Access Latest Computer Science E-books - eBookStore");

  return (
    <main>
        <div>
            <Hero/>
            <FeaturedProducts/>
            <Testimonial/>
            <Faq/>
        </div>
    </main>
  )
}
