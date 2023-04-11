import React from "react";
import DNavbar from "./DNavbar";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import swal from "sweetalert";
function ComposeBox() {
  const [message, setMessage] = React.useState("");
  const [to, setTo] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [file, setFile] = React.useState("");

  const handalsubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        to: to,
        subject: subject,
        message: message,
        file: file,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "success") {
          swal("Good job!", "You clicked the button!", "success");
        } else {
          swal("Good job!", "You clicked the button!", "error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <DNavbar></DNavbar>
      <div className="container w-[90%] md:w-4/5 mx-auto my-24 bg-white shadow-lg p-6">
        <div>
          <h1 className="text-2xl pt-2 text-center">Compose</h1>
        </div>
        <form
          onSubmit={handalsubmit}
          className=" justify-center text-black items-center w-4/5 mx-auto "
        >
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    To
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset  bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="email"
                        name=""
                        id="username"
                        autoComplete="email"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1  text-gray-900 placeholder:text-gray-800 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder=" Enter your Email"
                        onChange={(e) => setTo(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Subject
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name=""
                        id="username"
                        autoComplete="email"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1  text-gray-900 placeholder:text-gray-800 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder=" Enter the subject "
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="App">
                    <CKEditor
                      editor={ClassicEditor}
                      data="<p>Hello....</p>"
                      onReady={(editor) => {
                        console.log("Editor is ready to use!", editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setMessage(data);
                      }}
                    />
                  </div>
                </div>
                {/* choose the differetn file of list of email  */}
                <div className="sm:col-span-4">
                  <label htmlFor="choose file">Choose file </label>
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="choose file"
                    id="choose file"
                    onChange={(e) => setFile(e.target.value)}
                  >
                    <option value="file1">File 1</option>
                    <option value="file2">File 2</option>
                    <option value="file3">File 3</option>
                    <option value="file4">File 4</option>
                  </select>
                </div>
              </div>
              {/* textare hear  */}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-start gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send Message
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send BCC
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send CC
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ComposeBox;
