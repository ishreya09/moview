import ReviewPage from "./ReviewPage";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../index.css';
import "./ReviewPage.css";

function ReviewMovie(props) {
    return (
        // add review, cast 
        <ReviewPage image="https://images.pexels.com/photos/9420597/pexels-photo-9420597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            video="https://www.youtube.com/embed/NcE83Txe-3g"
            title="Harry Potter" summary="sdfhb dewuyfgewugdwsu Lorem lorem rem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi laudantium recusandae mollitia sint exercitationem magni nostrum ex tempora repellendus, provident illum doloremque quod, laboriosam itaque molestiae, at possimus voluptate commodi perspiciatis. Fugiat quo magnam at unde possimus? Fuga perferendis fesfwegueqhuw grebge"
            rating={5} genre="children, fantasy" duration="2hrs 30mins"
            language="English"  >description as child of the component
            Lorem lorem rem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi laudantium recusandae mollitia sint exercitationem magni nostrum ex tempora repellendus, provident illum doloremque quod, laboriosam itaque molestiae, at possimus voluptate commodi perspiciatis. Fugiat quo magnam at unde possimus? Fuga perferendis rerum facere rem, qui sapiente. Fugit, labore est veniam corrupti rem sit ullam nam? Voluptas, autem! Similique ex mollitia sed, eius praesentium neque tempora dolore hic minus ullam, laborum est reiciendis doloremque quos odit saepe cum distinctio totam quae delectus. Deleniti sit, praesentium voluptas nobis in nesciunt cumque sunt excepturi at, obcaecati eligendi alias facere perspiciatis fugit voluptate nam quaerat quia aliquid aut placeat illum cupiditate mollitia provident. Doloribus ut deserunt a, culpa impedit praesentium minima facilis reiciendis ratione! Soluta sequi dignissimos repellendus, quae ipsa nobis officiis! Quasi atque odio, amet tempora aut assumenda sit ea sapiente est? Repudiandae mollitia assumenda ad dignissimos. Explicabo, libero adipisci? Voluptates error nostrum iusto cum ea accusantium autem possimus quisquam aspernatur voluptatem enim, dolores obcaecati numquam praesentium placeat libero omnis exercitationem sed, voluptatibus
        </ReviewPage>
    )
}

export default ReviewMovie;