import AdSlideshow from "./AdSlideshow";

// Replace these placeholder images with your actual ad images
const adImages = [
  "https://i.postimg.cc/3RFH04D5/For-AD-Contact-BCAS-AD-Size-705-X-128.png",
  "https://i.postimg.cc/7ZJ8MQTJ/For-AD-Contact-BCAS-AD-Size-705-X-128(1).png",
];

export default function BottomAd() {
  return (
    <div className="w-full bg-gray-100 py-4">
      <div className="mx-auto max-w-6xl px-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
          <AdSlideshow images={adImages} className="h-24" interval={5000} />
        </div>
      </div>
    </div>
  );
}
