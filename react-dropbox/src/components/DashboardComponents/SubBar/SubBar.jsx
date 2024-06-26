import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SubBar.css";
import {
  faFileAlt,
  faFileUpload,
  faFolderPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { changeFolder } from "../../../redux/actionCreators/fileFoldersActionCreator";

const SubBar = ({
  setIsCreateFolderModalOpen,
  setIsCreateFileModalOpen,
  setIsFileUploadModalOpen,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentFolder, currentFolderData, userFolders } = useSelector(
    (state) => ({
      currentFolder: state.filefolders.currentFolder,
      currentFolderData: state.filefolders.userFolders.find(
        (folder) => folder.docId == state.filefolders.currentFolder
      ),
      userFolders: state.filefolders.userFolders,
    }),
    shallowEqual
  );
console.log("USER FOLDER",userFolders);
  const handleNavigate = (link, id) => {
    navigate(link);

    dispatch(changeFolder(id));
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light mt-2 bg-white py-2 px-5">
      <nav className="ms-5" aria-label="breadcrumb">
        <ol class="breadcrumb d-flex  align-items-center">
          {currentFolder !== "root" ? (
            <>
              <button
                onClick={() => handleNavigate("/dashboard", "root")}
                className="breadcrumb-item btn btn-link text-decoration-none"
              >
                Root
              </button>
              {currentFolderData?.data.path.map((fldr, index) => (
                <button
                  key={index}
                  className="breadcrumb-item btn btn-link text-decoration-none"
                  onClick={() =>
                    handleNavigate(
                      `/dashboard/folder/${
                        userFolders.find((folder) => folder.docId == fldr)
                          .docId
                      }`,
                      userFolders.find((folder) => folder.docId == fldr).docId
                    )
                  }
                >
                  {  
                    console.log("foooldeer",userFolders.find((folder) => folder.docId === fldr))}

                  {
                    userFolders.find((folder) => folder.docId == fldr).data.name
                  }
                </button>
              ))}
              <li className="breadcrumb-item active">
                {currentFolderData?.data.name}
              </li>
            </>
          ) : (
            <>
              <li className="breadcrumb-item active">Root</li>
            </>
          )}
        </ol>
      </nav>

      <ul className="navbar-nav ms-auto me-5 ">
        <li className="nav-item mx-2">
          <button
            className="btn btn-outline-dark"
            onClick={() => setIsFileUploadModalOpen(true)}
          >
            <FontAwesomeIcon icon={faFileUpload} />
            &nbsp; Upload Files
          </button>
        </li>
        <li className="nav-item mx-2">
          <button
            className="btn btn-outline-dark"
            onClick={() => setIsCreateFileModalOpen(true)}
          >
            <FontAwesomeIcon icon={faFileAlt} />
            &nbsp; Create Files
          </button>
        </li>
        <li className="nav-item ms-2">
          <button
            className="btn btn-outline-dark"
            onClick={() => setIsCreateFolderModalOpen(true)}
          >
            <FontAwesomeIcon icon={faFolderPlus} />
            &nbsp; Create Folders
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default SubBar;

{
  /* <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/dashboard">Root</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Umi Folders
          </li>
        </ol> */
}

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./SubBar.css";
// import {
//   faFileAlt,
//   faFileUpload,
//   faFolderPlus,
// } from "@fortawesome/free-solid-svg-icons";
// import { Link, useNavigate } from "react-router-dom";
// import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import { changeFolder } from "../../../redux/actionCreators/fileFoldersActionCreator";

// const SubBar = ({ setIsCreateFolderModalOpen }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { currentFolder, currentFolderData, userFolders } = useSelector(
//     (state) => ({
//       currentFolder: state.filefolders?.currentFolder,
//       currentFolderData: state.filefolders?.userFolders.find(
//         (folder) => folder.docId == state.filefolders?.currentFolder
//       ),
//       userFolders: state.filefolders?.userFolders,
//     }),
//     shallowEqual
//   );

//   const handleNavigate = (link, id) => {
//     navigate(link);

//     dispatch(changeFolder(id));
//   };

//   return (
//     <nav className="navbar navbar-expand-lg mt-2 navbar-light bg-white py-2 ">
//       <nav className="ms-5" aria-label="breadcrumb">
//         <ol class="breadcrumb d-flex  aligin-items-center">
//           {currentFolder !== "root" ? (
//             <>
//               <button
//                 onClick={() => handleNavigate("/dashboard", "root")}
//                 className="breadcrumb-item btn btn-link text-decoration-none"
//               >
//                 Root/Umi
//               </button>
//               {currentFolderData?.data.path.map((folder, index) => (
//                 <button
//                   key={index}
//                   className="breadcrumb-item btn btn-link"
//                   onClick={() =>
//                     handleNavigate(
//                       `/dashboard/folder/${
//                         userFolders.find((folder) => folder == folder.docId)
//                           .docId
//                       }`,
//                       userFolders.find((folder) => folder == folder.docId).docId
//                     )
//                   }
//                 >
//                   {
//                     userFolders.find((folder) => folder == folder.docId).data
//                       .name
//                   }
//                 </button>
//               ))}
//               {/* <li className="breadcrumb-item active">
//                 {currentFolderData?.data.name}
//               </li> */}
//             </>
//           ) : (
//             <>
//               <li className="breadcrumb-item active">Root</li>
//             </>
//           )}
//         </ol>
//       </nav>
//       <ul className="navbar-nav ms-auto me-5 ">
//         <li className="nav-item mx-2">
//           <button className="btn btn-outline-dark">
//             <FontAwesomeIcon icon={faFileUpload} />
//             &nbsp; Upload File
//           </button>
//         </li>
//         <li className="nav-item mx-2">
//           <button className="btn btn-outline-dark">
//             <FontAwesomeIcon icon={faFileAlt} />
//             &nbsp; Create File
//           </button>
//         </li>
//         <li className="nav-item ms-2">
//           <button
//             className="btn btn-outline-dark"
//             onClick={() => setIsCreateFolderModalOpen(true)}
//           >
//             <FontAwesomeIcon icon={faFolderPlus} />
//             &nbsp; Create Folder
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default SubBar;

// // {currentFolder !== "root" ? (
// //   <>
// //   <button
// //    onClick={() => handleNavigate("/dashboard", "root")}
// //    className="breadcrumb-item btn btn-link teaxt-decoration-none"
// //   >
// //    Root
// //   </button>
// //   {currentFolderData?.data.path.map((folder,index)=> (
// //     <button
// //       key={index}
// //       className="breadcrump-item btn btn-link"
// //       onClick={() => handleNavigate(
// //         '/dashboard/folder/${
// //           userfolders.find((folder)=> folder == folder.docId).docId
// //         }',
// //         userFolders.find((folder) => folder == folder.docId).docId
// //       )
// //     }
// //     >
// //       {userFolders.find((folder) => folder == folder.docId).data.name}
// //     </button>
// //   ))}
// //   <li className="breadcrumb-item active">
// //     {currentFolderData?.data.name}
// //   </li>
// //   </>
// //  ) : (
// //   <>
// //   <li className="breadcrumb-item active">Root</li>
// //   </>
// //  )}
