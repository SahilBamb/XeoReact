import "../../styles/PageTitle.css";

export default function PageTitle({title="Title", subTitle="SubTitle", color="lightblue"}){
    return (
        <div className="container-pageTitle">
            <div className="pageTitle"
                style={{ backgroundColor : color}}>
                <p className="title-text">{title}</p>
            </div>
            <div className="pageSubTitle">
                {subTitle}
            </div>
        </div>
    )
}