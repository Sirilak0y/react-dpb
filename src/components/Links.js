import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './Auth'
import fireConfig from '../config'
import { toast } from "react-toastify"
import LinksForm from "./LinksForm";



const Links = () => {
  useEffect(() => {
    getLinks();
  }, []);
    const [links, setLinks] = useState([]);
    const [currentId, setCurrentId] = useState("");

    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Navigate to="/ " />;
    }
  
    const getLinks = async () => {
      fireConfig.firestore().collection("links").onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setLinks(docs);
      });
    };
  
    const onDeleteLink = async (id) => {
      if (window.confirm("are you sure you want to delete this link?")) {
        await  fireConfig.firestore().collection("links").doc(id).delete();
        toast("Link Removed Successfully", {
          type: "error",
          autoClose: 2000
        });
      }
    };
  
    
  
    const addOrEditLink = async (linkObject) => {
      try {
        if (currentId === "") {
          await fireConfig.firestore().collection("links").doc().set(linkObject);
          toast("New Link Added", {
            type: "success",
          });
        } else {
          await  fireConfig.firestore().collection("links").doc(currentId).update(linkObject);
          toast("Link Updated Successfully", {
            type: "info",
          });
          setCurrentId("");
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <>
        <div className="col-md-4 p-2">
          <LinksForm {...{ addOrEditLink, currentId, links }} />
        </div>
        <div className="col-md-8 p-2">
          {links.map((link) => (
            <div className="card mb-1" key={link.id}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h4>{link.name}</h4>
                  <div>
                    <i
                      className="material-icons text-danger"
                      onClick={() => onDeleteLink(link.id)}
                    >
                      close
                    </i>
                    <i
                      className="material-icons"
                      onClick={() => setCurrentId(link.id)}
                    >
                      create
                    </i>
                  </div>
                </div>
                <p>{link.description}</p>
                {/*{<a href={link.url} target="_blank" rel="noopener noreferrer">Go to Website</a>}*/}
              </div>
              
            </div>
          ))}
           <div>
                    <div className="container mt-5">
                        <button onClick={() => fireConfig.auth().signOut()} class="btn btn-danger">Sign Out</button>
                    </div>
                </div>
        </div>
      </>
    );
};
export default Links;