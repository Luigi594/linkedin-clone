import React, { useState, useEffect } from 'react';
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from "./firebaseConfig";
import { collection, addDoc, } from 'firebase/firestore';

function Feed() {

    const [input, setInput] = useState('');

    // what ever the posts whe had
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        // a listenner to the db on the collection "posts"
        // to get all the data and set it to the posts hook
        db.collection("posts").onSnapshot((snapshot) => {

            setPosts(
                snapshot.docs.map((doc) => ({
                    
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        });
    }, []);

    const sendPost = e => {

        // preventing the default behavior
        e.preventDefault();
        
        // adding a new post
        /* db.collection("posts").add({

            name: "Luis Martinez",
            description: "This is a real test",
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }); */

        try{

            const docRef = addDoc(collection(db, "posts"), {
                name: "Luis Martinez",
                description: "This is a real test",
                message: input,
                photoUrl: "",
            })
        }
        catch(e){
            console.log(e);
        }

        setInput("");
    }

  return (
    <div className='feed'>
      <div className="feed_inputContainer">
          <div className="feed_input">

              <CreateIcon />

              {/** this is the form */}
              <form>
                  <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                  <button onClick={sendPost} type="submit">Send</button>
              </form>
          </div>

          {/** these are the other options that appears under the form in Likedin */}
          <div className="feed_inputOptions">
              <InputOption Icon={ImageIcon} title="Photo" color="#7085F9"/>
              <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
              <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
              <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E"/>
          </div>          
      </div>

      {/** Feed Posts */}
      {posts.map(({id, data: { name, description, message, photoUrl} }) => (
          
          // we need a key because we only want to render the last post we sent
          <Post 
          
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
          />
      ))}
    </div>
  )
}

export default Feed
