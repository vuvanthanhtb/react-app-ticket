const SearchTicketPage = () => {
  return (
    <div className="search-ticket-container">
      <h1>Search Tickets</h1>
      
      <div className="search-form">
        <form>
          <div className="form-group">
            <label htmlFor="ticketNumber">Ticket Number:</label>
            <input 
              type="text"
              id="ticketNumber"
              name="ticketNumber"
              placeholder="Enter ticket number"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <select id="status" name="status" className="form-control">
              <option value="">Select status</option>
              <option value="open">Open</option>
              <option value="inProgress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="dateRange">Date Range:</label>
            <input 
              type="date"
              id="startDate"
              name="startDate"
              className="form-control"
            />
            <span> to </span>
            <input 
              type="date"
              id="endDate"
              name="endDate" 
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="priority">Priority:</label>
            <select id="priority" name="priority" className="form-control">
              <option value="">Select priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchTicketPage;
