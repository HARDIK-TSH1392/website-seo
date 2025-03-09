export const DownloadSection = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-900 text-center">
                Download Ehviewer APK for Android (Default Version)
            </h2>

            {/* Download Box */}
            <div className="mt-10 border border-blue-300 rounded-lg p-8 flex flex-col md:flex-row items-center gap-8">
                {/* Left - Android Logo & Text */}
                <div className="flex flex-col items-center w-full md:w-1/3">
                    {/* <img src="/android-logo.png" alt="Android" className="w-32" /> */}
                    <h3 className="text-xl font-semibold text-blue-700 mt-2">Android</h3>
                </div>

                {/* Center - Description */}
                <div className="w-full md:w-1/3 text-gray-800">
                    <p>
                        Click on the download button to download Ehviewer for Android users and enjoy 
                        the Manga Comic reading without interruption.
                    </p>
                </div>

                {/* Right - Download Buttons */}
                <div className="w-full md:w-1/3 flex flex-col gap-4">
                    {apkFiles.map((file, index) => (
                        <a 
                            key={index} 
                            href={file.link} 
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-full shadow-md text-center transition duration-300"
                            download
                        >
                            {file.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

// ✅ Updated APK Download Links
const apkFiles = [
    { name: "EhViewer-1.13.1-default-arm64-v8a.apk", link: "https://ehviewer.app/Download/EhViewer-1.13.1-default-arm64-v8a.apk" },
    { name: "EhViewer-1.13.1-default-armeabi-v7a.apk", link: "https://ehviewer.app/Download/EhViewer-1.13.1-default-armeabi-v7a.apk" },
    { name: "EhViewer-1.13.1-default-universal.apk", link: "https://ehviewer.app/Download/EhViewer-1.13.1-default-universal.apk" },
    { name: "EhViewer-1.13.1-default-x86_64.apk", link: "https://ehviewer.app/Download/EhViewer-1.13.1-default-x86_64.apk" }
];