import React from 'react'
import './index.css'
import BlogImage from '../Images/BlogImage.jpg'

const index = () => {
    return (
        <div className="post-screen">
            <div className="post-container">
                <img className="post-image" src={BlogImage} alt="Post Blog Photo" />
                <h2 className="post-title">
                    <strong>This is the title</strong>
                    <div className="edit-delete">
                        <span className="edit-icon"><i class="far fa-edit"></i></span>
                        <span className="delete-icon"><i class="far fa-trash-alt"></i></span>
                    </div>
                </h2>
                <div className="info">
                    <div className="post-details">
                        <div>Author : Author Name</div>
                        <div>Created : Some months ago</div>
                    </div>
                    <div className="description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, amet perspiciatis esse tempora a odit recusandae dolores expedita temporibus accusantium quia pariatur voluptate, fuga sequi ipsa est perferendis laudantium dicta. Fuga quas quam commodi neque ex molestiae laborum, culpa amet earum mollitia at tenetur, tempore vel, quasi doloribus distinctio accusantium eum iste maxime labore magnam facere ipsa qui! Non, aut tempora. Aspernatur omnis dolorem recusandae, reprehenderit et dolore possimus, laborum eligendi labore, minus quidem cumque cupiditate eveniet soluta eos! Corrupti quisquam maxime quam voluptatum veniam ex nam nobis asperiores ut, soluta fugit neque alias, dolorum iusto vero possimus consectetur aliquid.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum nisi doloremque consectetur harum inventore voluptates magnam eos ratione quo dolores sit atque nobis cum suscipit at, similique pariatur? Animi, facilis sed! Odit asperiores veniam corrupti odio, perspiciatis laudantium repudiandae consequatur a, ex ipsam, dolorem similique quod saepe cumque optio amet! Porro iste quam libero magnam, architecto, praesentium vel sapiente consequatur totam sequi illum autem dolorum sunt rerum mollitia obcaecati veniam deleniti aperiam doloremque! Optio, enim reiciendis pariatur veritatis cum a. Optio veritatis fugiat ratione ducimus voluptatibus at officia ea, debitis eius ipsa aliquid incidunt. Doloribus eius eum nemo corporis nulla.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
