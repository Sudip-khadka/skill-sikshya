import React from 'react'

const Button= function Button({type, className}) {
    switch(type){
        case 'delete':
            return <button className={className}>Delete</button>;

        case 'submit':
            return <button className={className}>Submit</button>;
        case 'upload':
            return <button className={className}>Upload</button>;
        case 'play':
            return <button className={className}>Play</button>;
        case 'icon':
            return <button className={className}>Icon</button>;
        case 'search':
            return <button className={className}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="blue" class="bi bi-search-heart-fill" viewBox="0 0 16 16">
            <path d="M6.5 13a6.47 6.47 0 0 0 3.845-1.258h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1A6.47 6.47 0 0 0 13 6.5 6.5 6.5 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13m0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
          </svg></button>;
        case 'download':
            return <button className={className}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="brown" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
          </svg></button>;
    }
  return (
    
    <button className={className}>{type}</button>
    
  )
}
export default Button;