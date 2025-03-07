import { useState } from "react";

export const FAQsPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-900">FAQ’s</h1>
                <p className="text-gray-600 mt-2">
                    Q&A <a href="#" className="text-blue-600 font-medium hover:underline">about Ehviewer</a> based on User Experiences
                </p>
            </div>

            {/* FAQ Section - Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqData.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
};

// FAQ Item Component (Collapsible)
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className="bg-gray-100 border border-gray-300 rounded-lg p-4 cursor-pointer transition duration-300"
            onClick={() => setIsOpen(!isOpen)}
        >
            <h3 className="text-gray-900 font-semibold flex justify-between items-center">
                {question}
                <span className="text-xl">{isOpen ? "−" : "+"}</span>
            </h3>
            {isOpen && <p className="text-gray-700 mt-2">{answer}</p>}
        </div>
    );
};

// FAQ Data
const faqData = [
    {
        question: "How can I search for content on Ehviewer?",
        answer: "EhViewer offers an advanced search feature where you can enter keywords, select categories, and apply filters to find exactly what you’re looking for."
    },
    {
        question: "Is Ehviewer available on the Google Play Store?",
        answer: "No, it is not available on the official store as it is a third-party application, but you can download it from the official website."
    },
    {
        question: "Can you customize your viewing experience?",
        answer: "Yes, Ehviewer enables its users to customize the theme, layout, and mods to enhance their comic reading experience."
    },
    {
        question: "Does Ehviewer support tag search?",
        answer: "Yes, you can search for specific content using different tags. This feature provides more accurate results."
    },
    {
        question: "Can you download content for offline viewing?",
        answer: "Yes, you can download your favorite comics for offline viewing."
    },
    {
        question: "Is Ehviewer free?",
        answer: "Ehviewer is a free-to-use Android app that unlocks features you would typically have to pay a subscription for."
    },
    {
        question: "What to do if Ehviewer is not working properly?",
        answer: "If the app is not working, check if you are running an outdated version. Download the latest version and upgrade your device’s OS."
    },
    {
        question: "Is Ehviewer legal?",
        answer: "The legality of using EhViewer depends on your country’s copyright and content laws. Ensure you comply with local regulations."
    }
];