const MissionPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center text-center p-8">
        <div className="mb-4">
          <button className="bg-gray-800 text-orange-500 px-4 py-2 rounded-full mb-4">
            Mission
          </button>
        </div>
        <h1 className="text-5xl font-bold mb-4">Payments Acceleration Nodes</h1>
        <h2 className="text-4xl text-orange-500 font-bold mb-8">Campaign</h2>
        <p className="max-w-2xl mb-8">
          Building Bitcoin node infrastructure for real-world payments. Fast,
          secure, and permissionless with the Lightning Network.
        </p>
        <div className="flex gap-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded">
            Start Journey →
          </button>
          <button className="bg-transparent border border-white px-6 py-3 rounded">
            Learn More
          </button>
        </div>
      </main>

      {/* Supported By Section */}
      <section className="p-8">
        <h3 className="text-center mb-4">Supported By</h3>
        <div className="flex justify-center gap-8">
          {["atalog", "Capsule", "Luminous", "Nietzsche", "Lumi"].map(
            (partner) => (
              <div key={partner} className="text-gray-500">
                {partner}
              </div>
            )
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="flex justify-between items-center p-4 text-sm">
        <div>© 2024 Payments Accelerated, Inc.</div>
        <div className="flex gap-4">
          <span>Icon 1</span>
          <span>Icon 2</span>
        </div>
      </footer>
    </div>
  );
};

export default MissionPage;
