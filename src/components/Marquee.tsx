import React from "react";

  
const featuresData = [
    {
        title: "User-friendly interface",
        description: "Ehviewer app comes with an easy-to-use interface to make your online comic reading effortless and joyful. When you launch the app you get a search feature, new releases, and other categories to browse simply. You can apply different filters to get a specific result and you don’t need to be tech-savvy to use Ehviewer Apk."
    },
    {
        title: "Huge collection of comics",
        description: "Doesn’t matter if you are searching for a new release or an old one, on this app you will get a vast catalog of manga comics to kill your boredom. This app serves every comic lover’s need because of the availability of various genres of comics on its platform."
    },
    {
        title: "Top-notch security",
        description: "Because of online threats and malware, we hesitate to navigate random platforms and apps. But you don’t need to worry about your security while browsing Ehviewer as it doesn’t require any personal information."
    },
    {
        title: "Zoom feature for crystal-clear reading",
        description: "Don’t want to trouble your eyes? No need to do this as the Ehviewer app offers a zoom feature to enlarge small text for clear reading. Just zoom in on the text as per your vision and dive into the comic world."
    },
    {
        title: "Modify the app as per your choice",
        description: "If you don’t like the look of the app then you can modify it. The app usually provides various customization options, including theme changes, display settings, and more to tailor the browsing experience to the user’s preferences."
    },
    {
        title: "Download option",
        description: "One of the most notable features of the Ehviewer app is its download feature. If you want to read the comics in an offline mode then you can download the comics and enjoy them while you are not connected to the internet. Also, it enables you to change the download location and image resolution."
    },
    {
        title: "Create your favorite list",
        description: "User can create their list of favorite comics with a simple feature. Ehviewer comes with a tiny heart shape icon and for using it just choose a comic and tap on it. The comic will automatically be added to your favorite list."
    },
    {
        title: "Free",
        description: "Ehviewer is a free app so no need to spend your hard-earned bucks. To access the premium feature you need to go for a subscription."
    }
];

const Marquee = () => {
    return (
      <div className="relative  h-[350px] overflow-hidden">
        <div className="absolute flex  animate-marquee space-x-5">
          {[...featuresData, ...featuresData].map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-96">
            <h3 className="text-lg font-semibold text-blue-900">{feature.title}</h3>
            <p className="text-gray-600 mt-2 text-justify">{feature.description}</p>
        </div>
          ))}
        </div>
      </div>
    );
  };

export default Marquee;