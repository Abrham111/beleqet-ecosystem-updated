import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-black text-white">

      <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-8 py-28 text-center">

        <div className="mb-6 text-7xl">
          🔒
        </div>

        <h1 className="text-6xl font-extrabold">
          Secure Tunnel
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-gray-300">
          Enterprise-grade encrypted messaging built with
          Next.js, NestJS and AES-256-GCM encryption.
        </p>

        <div className="mt-10 flex gap-4">

          <Link
            href="/chat"
            className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-700"
          >
            Start Secure Chat
          </Link>

        </div>

      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-8 pb-24 md:grid-cols-3">

        <div className="rounded-xl bg-white/10 p-8 backdrop-blur">
          <h3 className="mb-3 text-2xl font-bold">
            🔒 Encryption
          </h3>

          <p className="text-gray-300">
            Every message is encrypted before storage using
            AES-256-GCM.
          </p>
        </div>

        <div className="rounded-xl bg-white/10 p-8 backdrop-blur">
          <h3 className="mb-3 text-2xl font-bold">
            ⚡ Real-Time
          </h3>

          <p className="text-gray-300">
            Instant messaging powered by WebSockets.
          </p>
        </div>

        <div className="rounded-xl bg-white/10 p-8 backdrop-blur">
          <h3 className="mb-3 text-2xl font-bold">
            🌍 Enterprise Ready
          </h3>

          <p className="text-gray-300">
            Built with scalability, GDPR readiness, and internationalization in mind.
          </p>
        </div>

      </section>

    </main>
  );
}