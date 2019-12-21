import React, { Component } from "react";
import {imageGallery, imageDetails} from './Component/Data';

const ImageContext = React.createContext();
class ImageProvider extends Component {
    state={
        images:[],
        imageDetails:imageDetails,
    }
    componentDidMount(){
      this.setImages();
    }
    getItem =(id)=>{
      const image= this.state.images.find(item => item.id === id);
      return image;
    };
    handleDetail=(id)=>{
       const image= this.getItem(id);
       this.setState(()=>{
         return {imageDetails:image}
       })
    }
    downloadImage=()=>{
        console.log("download image")
    }
    
    setImages= ()=>{
      let tempImages=[];
      imageGallery.forEach(image=>{
        const singleImage= {...image};
        tempImages=[...tempImages, singleImage]
        
    })
      this.setState(()=>{
        return {images:tempImages}
      })
    }
    

  render() {
    return (
      <ImageContext.Provider value={{
          ...this.state,
          handleDetail:this.handleDetail,
          downloadImage:this.downloadImage,
      }}>
        {this.props.children}
      </ImageContext.Provider>
    );
  }
}

const ImageConsumer = ImageContext.Consumer;

export { ImageProvider, ImageConsumer };
