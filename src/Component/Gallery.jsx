export default function Gallery() {
  return (
    <section id="gallery" className="p-8 bg-white mt-8">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
        Photo Gallery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="rounded-xl shadow-lg overflow-hidden">
          <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYNB5esAVmHTD-1CLSZ-bPv_UE6dZp8VRAQ&s" alt="gallery1" />
          <div className="p-3 bg-green-50 text-center">Village View</div>
        </div>
        <div className="rounded-xl shadow-lg overflow-hidden">
          <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmsV1DiZDaGanWruvr2lRQolM63JxvaH26vg&s" alt="gallery2" />
          <div className="p-3 bg-green-50 text-center">Farming</div>
        </div>
        <div className="rounded-xl shadow-lg overflow-hidden">
          <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLL5q3urFbYKsi6Lx6w0lU23oa4h5nJW82A&s" alt="gallery3" />
          <div className="p-3 bg-green-50 text-center">Community Center</div>
        </div>
      </div>
    </section>
  );
}
