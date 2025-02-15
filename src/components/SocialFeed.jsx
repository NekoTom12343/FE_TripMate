"use client";

import { useState } from "react";
import { Avatar, TextField, Button, Card } from "@mui/material";
import {
  Camera,
  Smile,
  List,
  ImageIcon,
  MoreHorizontal,
  Heart,
  MessageCircle,
  Minus,
} from "lucide-react";

export default function SocialFeed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "John Doe",
      timestamp: "Just now",
      content:
        "The Dragon Bridge in Da Nang is a must-see! It breathes fire and water every weekend at 9 PM. The view at night is spectacular with the bridge illuminated in vibrant colors.",
      image:
        "https://tiki.vn/blog/wp-content/uploads/2023/03/cau-rong-da-nang.jpg",
      likes: 0,
    },
    {
      id: 2,
      username: "Jane Smith",
      timestamp: "1 hour ago",
      content:
        "Exploring Ho Chi Minh City has been an incredible experience. From the bustling Ben Thanh Market to the historic Cu Chi Tunnels, there's so much to see and do. Don't miss the delicious street food!",
      image:
        "https://lesrivesexperience.com/wp-content/uploads/2018/11/sunset-on-saigon-river.jpg",
      likes: 0,
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  const handleCreatePost = () => {
    if (!newPost.trim()) return;

    const newPostData = {
      id: posts.length + 1,
      username: "John Doe",
      timestamp: "Just now",
      content: newPost,
      image: previewImage,
      likes: 0,
    };

    setPosts([newPostData, ...posts]);
    setNewPost("");
    setPreviewImage(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-2/5 mx-auto space-y-4 p-4 mb-10">
      {/* Post Creation Card */}
      <Card
        className="p-4"
        sx={{ borderRadius: "20px", border: "1px solid #2D84F7" }}
      >
        <div className="flex items-start gap-3">
          <Avatar className="w-10 h-10" />
          <div className="flex-1">
            <TextField
              fullWidth
              multiline
              variant="standard"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="bg-transparent border-none text-base placeholder:text-blue-400"
              placeholder="Let's post something to connect everyone!"
            />
            {previewImage && (
              <div className="mt-3">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-[500px] object-cover rounded-lg"
                />
              </div>
            )}
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2">
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="upload-image"
                  type="file"
                  onChange={handleImageChange}
                />
                <label htmlFor="upload-image">
                  <Button variant="ghost" size="icon" className="text-blue-400">
                    <Camera className="w-5 h-5 text-blue-400" />
                  </Button>
                </label>
                <Button variant="ghost" size="icon" className="text-blue-400">
                  <Smile className="w-5 h-5 text-blue-400" />
                </Button>
                <Button variant="ghost" size="icon" className="text-blue-400">
                  <List className="w-5 h-5 text-blue-400" />
                </Button>
                <Button variant="ghost" size="icon" className="text-blue-400">
                  <ImageIcon
                    className="w-5 h-5 text-blue-400"
                    onClick={() =>
                      document.getElementById("upload-image").click()
                    }
                  />
                </Button>
              </div>
              <Button
                onClick={handleCreatePost}
                className=" text-white rounded-full px-6"
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Posts Feed */}
      {posts.map((post) => (
        <Card
          key={post.id}
          className="p-4"
          sx={{ borderRadius: "20px", border: "1px solid #2D84F7" }}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10" />
              <div>
                <div className="font-semibold">{post.username}</div>
                <div className="text-sm text-gray-500">{post.timestamp}</div>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="w-5 h-5 text-blue-400" />
            </Button>
          </div>

          <div className="mt-3">
            <p className="text-gray-900">{post.content}</p>
            <span className="text-blue-500 text-sm">#hashtag</span>
          </div>

          <div className="mt-3">
            <img
              src={post.image || "/placeholder.svg"}
              alt="Post content"
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-6">
              <Button variant="ghost" size="icon" className="text-gray-600">
                <Minus className="w-5 h-5 text-blue-400" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600">
                <Heart className="w-5 h-5 text-blue-400" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600">
                <MessageCircle className="w-5 h-5 text-blue-400" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
