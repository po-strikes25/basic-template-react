export const Section = ({ title, content_1, content_2, children }) => {
    return (
        <div className="section">
            <h1>{title}</h1>
            <p> {content_1} </p>
            <p> {content_2} </p>
            {children}
        </div>
    )
}