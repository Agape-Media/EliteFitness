export default function Contact2() {
  return (
    <>
      <div className="mt-20">
        <p className="text-4xl text-center font-bold mb-12 text-gray-800">
          Contact
        </p>

        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <TextArea />

        <div className="flex justify-center">
          <button className="text-xl font-light mt-8 border border-transparent hover:border-red-700 hover:text-red-700 px-4 py-2 transition duration-300 ease-in-out focus:outline-none">
            Send
          </button>
        </div>
      </div>
    </>
  );
}

const Input = ({ placeholder }) => (
  <input
    className="border border-gray-400 w-full h-12 px-4 mb-10"
    placeholder={placeholder}
  />
);

const TextArea = ({ placeholder }) => (
  <textarea
    rows="8"
    className="border border-gray-400 w-full px-4 py-4"
    placeholder="Message"
  />
);
