export const About = (props) => (
    <div className="about">
        <h1>About Me</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies odio nec mi semper fringilla. Suspendisse tincidunt mi vitae orci luctus, eget molestie arcu fermentum. Proin id semper felis. Morbi tincidunt volutpat ante, vitae suscipit arcu vehicula sit amet. Nullam et urna ac nulla volutpat pharetra. Maecenas laoreet efficitur nulla vitae malesuada. Fusce consequat a diam nec commodo. Maecenas at risus ac leo interdum rutrum sed eget nulla.
        </p>
        <p>
            Donec eu posuere ex, a tempus risus. Etiam viverra maximus congue. In hac habitasse platea dictumst. Vestibulum quis mollis libero. Integer imperdiet velit vitae nibh rhoncus, in convallis nunc semper. Curabitur pulvinar urna dignissim quam pretium ultricies. In auctor auctor magna, quis elementum arcu congue non.
        </p>
        <p>
            Ut ultrices erat non tincidunt posuere. Curabitur bibendum est et molestie porttitor. Suspendisse ut est dolor. Aliquam sed viverra lectus, a semper elit. Morbi volutpat imperdiet fermentum. Vivamus vel nulla commodo, fringilla massa quis, blandit nulla. Nam volutpat turpis ex, non posuere erat efficitur vel. Nullam faucibus nulla eget ligula porta mollis. Sed tristique neque in dolor condimentum, vel aliquam velit mattis. Aenean imperdiet dolor et nisi pharetra viverra. Etiam placerat blandit ipsum, dictum auctor quam semper non. Nullam a quam eros.
        </p>
        {props.children}
    </div>
)