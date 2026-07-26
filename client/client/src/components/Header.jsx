export default function Header() {
    return (
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">

            <div>

                <h1 className="text-2xl font-bold">

                    Nexus AI

                </h1>

                <p className="text-sm text-gray-400">

                    Personal AI Assistant

                </p>

            </div>

            <div className="flex items-center gap-2">

                <div className="w-3 h-3 rounded-full bg-green-500"></div>

                <span>Online</span>

            </div>

        </div>
    );
}