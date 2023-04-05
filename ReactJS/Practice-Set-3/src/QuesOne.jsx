import "./App.css";

// Build a React component which takes an image, image height and image width as props and sets the height and width of the image and displays the image on DOM. Image link - https://picsum.photos/200

export function QuesOne({imageLink, imageHeight, imageWidth}){
    return (
        <div>
            <h2>Solution 1</h2>
            <img src={imageLink} alt="river image" style={{height: imageHeight, width: imageWidth}} />
            <hr />
        </div>
    );
}