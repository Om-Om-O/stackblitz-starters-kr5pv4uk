export function TicketBox({ tickets }) {
  return (
    <div className="flex flex-col items-center gap-y-3">
      {tickets.map((ticket, index) => (
        <Ticket key={index} ticket={ticket} />
      ))}
    </div>
  );
}

export function Ticket({ ticket }) {
  return (
    <div className="flex border-4 border-gray-800 p-4 rounded-lg shadow-md w-full max-w-lg">
      <div className="flex flex-col w-2/3">
        <div className="flex justify-between items-center mb-2">
          <div className="text-lg font-semibold">{ticket.TimeRanges.start}</div>
          <div className="mx-2 text-xl font-bold">-</div>
          <div className="text-lg font-semibold">{ticket.TimeRanges.end}</div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <div className="text-md">{ticket.from}</div>
          <div className="text-md">{ticket.to}</div>
        </div>
        <div className="text-gray-600">
          {/* Placeholder for logo */}
          <span className="w-12 h-18 block">
            <img
              src="/llogo.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-1/3 text-right">
        <div className="text-lg font-bold">{ticket.price}</div>
        <div className="text-sm text-gray-500">{ticket.tripType}</div>
        <div className="text-sm text-gray-500">Stops {ticket.stopAmount}</div>
      </div>
    </div>
  );
}
