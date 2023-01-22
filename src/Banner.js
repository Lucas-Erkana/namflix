import React from 'react'
import './Banner.css';
function Banner() {
  return (
    <header className='banner' 
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUPEhIVFRUVFRUVFRUVFRcVFxUVFRUWFhUVFRUYHSggGB0lHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQwNFQ4NFisZExkrKysrKysrKysrKysrKystKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAaAAEBAQEAAwAAAAAAAAAAAAAAAQIDBQYH/8QALxABAQEBAAABCQUJAAAAAAAAAAERAhIDBxchMUFUk+IEM2HS8AUGExQWMjRTkf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD4lQqAAAoABigAKCKLAQUABcBKLhgILhgIYoCYLQGRUwBFAQABKqAIoCAAN8RlrgGai9IAqKAACgAGgCymGKApFBBrDAQUAxFUGRTAZRoBk1cTATEaQEFAZFQAAEFQBvhhvkGaFQBQAVFABQMIKApAFXEkagIsUwEMX9frVgM4ti4YCYKgM2GNYlgM4KmgiLUBEaQEABAAAAGuGG+AZqLUAUAUEBQICtRFgCwWQFgjUgCpI1gJKGLgGGKAyLYkBExpKCYlaSgyi4lBKi4gJRcQEFQBFQFa5Yb4BnoKAAoIsADFFgI1Iiyg1gVcAikjVgLzDU0gLhOVi6CWJjpWYDMiWNICYy6Ss9AzhYup0DNZasTAZo1YzQSoqAYigIAA3xGG+KDFDogCoApgoIsAFaxmNQFWVFgNBFA5U1QAigsozrWgmM1u1mgyWlpKCWM1pKCaggJUWpQQKAgICoqANcMt8AxQpAFRQAAVYkUBYQBZV1FBqNRlNB00SUBYupzVBQxLQKggKlWoDKatSglqLUoIlKaCIqaAACCoA3ww6cA50KAaaAKgoLDUUFCALK1GYsBpYyoKqaA1TxJTQWUQ0DV1NQC9FKAlTVrIKzQBEWoAlVKBqaACKANc1hvgGai1AFRQFQBQAWKyugrUrEqg1qsroLKrIDQmmgqogNDOmgtQZ0GmTTxAamiAIqAAgAAAICtcMN8AzUWoAACgAoAAAKACrrOqCqyugpqAKIYCiABqUABAAQF1AARUARUBUABvhlrkGagAKAIoACgAAAACgBqoAoAAAAgCpQAEAAAAAezfsP8Ac/r7R5GfaL5XwTq9Sczyd7uS2bfXM9cryHo+vxF+RfzgCej6/EX5P1s/0Bf9/Xs37j8czfHmgCzzf34jr259xfd7/wC/2fiTzf3ZP5jr12zf4Fz1e+3xgB6P78RfkfW68ebu5/k/98j9YA//2Q==")`,
        backgroundPosition: "center center",
    }}> 
    <div className='banner_contents'>
        <h1 className='banner_title'>Movie name</h1>
        <div className='banner_buttons'>
            <button className='banner_button'>Play</button>
            <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner_description'>
            This is a test description
        </h1>
    </div>
    <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner
