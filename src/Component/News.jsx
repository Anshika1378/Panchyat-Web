import { useState } from "react";

export default function News() {
  const [news] = useState([
    {
      id: 1,
      title: "Cleanliness Drive",
      date: "25 Aug 2025",
      content: "A village-wide cleanliness drive will be organized next Sunday.",
    },
    {
      id: 2,
      title: "Health Camp",
      date: "15 Sep 2025",
      content: "Free health check-up camp in collaboration with local doctors.",
    },
    {
      id: 3,
      title: "Blood Donation Camp",
      date: "20 Sep 2025",
      content: "All man and women to come and donate a blood ",
    },
    {
      id: 4,
      title: "Free Eye Checkup Camp",
      date: "1 Oct 2025",
      content: "Check your eyes ",
    },
  ]);

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl mt-8 font-semibold text-center mb-4 text-green-800">News & Updates</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {news.map((item) => (
          <div key={item.id} className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.date}</p>
            <p className="mt-2">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
