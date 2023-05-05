export default function ContentCard(props) {
    return (
        <a
            href="#"
            className="group mx-auto block w-full space-y-2 rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-900/5 hover:bg-gray-100 hover:shadow-md hover:ring-slate-200"
        >
            <div className="flex items-center space-x-3">
                <h3 className="text-md font-semibold text-slate-900">{props.title}</h3>
            </div>
            <p className="text-sm text-slate-500">{props.content}</p>
        </a>
    );
}
