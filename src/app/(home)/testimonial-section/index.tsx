import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

// Using high-quality unsplash images as placeholders for the testimonials
const testimonials = [
    {
        quote: "They understood our goals perfectly, providing practical solutions with great attention to detail and professionalism.",
        name: "Robert Wilson",
        designation: "Business Analyst",
        src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=3538&auto=format&fit=crop",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop",
    },
    {
        quote: "I appreciated their innovative approach and clear communication, which led to a design beyond what I imagined.",
        name: "David Lee",
        designation: "Product Designer",
        src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=3540&auto=format&fit=crop",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop",
    },
    {
        quote: "Their guidance and insights improved our overall architecture. Create a user experience that users genuinely enjoy.",
        name: "Daniel Brooks",
        designation: "UX Researcher",
        src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=3540&auto=format&fit=crop",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop",
    },
];

export default function TestimonialSection() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-zinc-950 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Testimonial <span className="text-primary text-blue-600">Cards</span>
                    </h2>
                    <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Hear from our satisfied clients about their experiences working with our team.
                    </p>
                </div>

                <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
            </div>
        </section>
    );
}
