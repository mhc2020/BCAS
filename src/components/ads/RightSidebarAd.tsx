import AdSlideshow from "./AdSlideshow";

// Replace these placeholder images with your actual ad images
// Should be 728x90 (landscape)
const adImages = [
  "https://i.postimg.cc/nzDCy152/Contact-BCAS-To-Place-Your-Ad-HERE.png",
  "https://i.postimg.cc/xd7XpZsJ/Contact-BCAS-To-Place-Your-Ad-HERE(1).png",
];

export default function RightSidebarAd() {
  return (
    <div 
      className="hidden lg:block fixed z-10"
      style={{
        right: '0',
        top: '100px',
        width: '128px',
        height: '705px',
      }}
    >
      <div 
        className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
        style={{ 
          height: '705px', 
          width: '128px',
          transformOrigin: 'left top',
          position: 'absolute',
          left: '0',
          top: '0',
        }}
      >
        <AdSlideshow images={adImages} className="h-full" interval={5000} />
      </div>
    </div>
  );
}
