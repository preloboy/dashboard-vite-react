export const Loading = () => {
    return (
      <div className="bg-slate-900 flex items-center justify-center min-h-screen">
        <button type="button" className="bg-indigo-500 flex items-center px-4 py-2 text-white rounded-sm" disabled>
          <svg
            className="animate-spin h-5 w-5 mr-3 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0c-5.523 0-10 4.477-10 10h4zm2 5.291l1.707 1.707A7.978 7.978 0 0112 20v4c-2.137 0-4.153-.63-5.818-1.707L6 17.291zm2.293-.707l4-4A1 1 0 0012 12H0a8 8 0 0012 8v-2c-1.829 0-3.518-.559-4.95-1.5L8.293 16.584z"
            ></path>
          </svg>
          Processing...
        </button>
      </div>
    );
  };
  