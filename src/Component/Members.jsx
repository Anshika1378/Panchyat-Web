export default function Members() {
  const members = [
    { name: "Suresh Kumar", role: "Sarpanch" },
    { name: "Meena Devi", role: "Deputy Sarpanch" },
    { name: "Ravi Singh", role: "Secretary" },
    { name: "Asha Rani", role: "Treasurer" },
  ];

  return (
    <section className="p-6 bg-white">
      <h2 className="text-2xl font-semibold text-center mb-4">Panchayat Members</h2>
      <ul className="grid gap-3 max-w-lg mx-auto">
        {members.map((m, i) => (
          <li
            key={i}
            className="flex justify-between p-3 bg-gray-100 rounded-lg shadow-sm"
          >
            <span className="font-medium">{m.name}</span>
            <span className="text-gray-600">{m.role}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
