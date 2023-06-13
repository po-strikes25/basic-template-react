import "./style.css"
import { Navbar } from "./Components/Navbar"
import { About } from "./Components/About"
import { Section } from "./Components/Section"
import { Footer } from "./Components/Footer"

/* creating a data-set for DRY */
let section_content = [
    {
        title: "Blog",
        content_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies odio nec mi semper fringilla. Suspendisse tincidunt mi vitae orci luctus, eget molestie arcu fermentum. Proin id semper felis. Morbi tincidunt volutpat ante, vitae suscipit arcu vehicula sit amet. Nullam et urna ac nulla volutpat pharetra. Maecenas laoreet efficitur nulla vitae malesuada. Fusce consequat a diam nec commodo. Maecenas at risus ac leo interdum rutrum sed eget nulla.",
        content_2: "Donec eu posuere ex, a tempus risus. Etiam viverra maximus congue. In hac habitasse platea dictumst. Vestibulum quis mollis libero. Integer imperdiet velit vitae nibh rhoncus, in convallis nunc semper. Curabitur pulvinar urna dignissim quam pretium ultricies. In auctor auctor magna, quis elementum arcu congue non."
    },
    {
        title: "Skills",
        content_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies odio nec mi semper fringilla. Suspendisse tincidunt mi vitae orci luctus, eget molestie arcu fermentum. Proin id semper felis. Morbi tincidunt volutpat ante, vitae suscipit arcu vehicula sit amet. Nullam et urna ac nulla volutpat pharetra. Maecenas laoreet efficitur nulla vitae malesuada. Fusce consequat a diam nec commodo. Maecenas at risus ac leo interdum rutrum sed eget nulla.",
        content_2: "Donec eu posuere ex, a tempus risus. Etiam viverra maximus congue. In hac habitasse platea dictumst. Vestibulum quis mollis libero. Integer imperdiet velit vitae nibh rhoncus, in convallis nunc semper. Curabitur pulvinar urna dignissim quam pretium ultricies. In auctor auctor magna, quis elementum arcu congue non."
    },
    {
        title: "Projects",
        content_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies odio nec mi semper fringilla. Suspendisse tincidunt mi vitae orci luctus, eget molestie arcu fermentum. Proin id semper felis. Morbi tincidunt volutpat ante, vitae suscipit arcu vehicula sit amet. Nullam et urna ac nulla volutpat pharetra. Maecenas laoreet efficitur nulla vitae malesuada. Fusce consequat a diam nec commodo. Maecenas at risus ac leo interdum rutrum sed eget nulla.",
        content_2: "Donec eu posuere ex, a tempus risus. Etiam viverra maximus congue. In hac habitasse platea dictumst. Vestibulum quis mollis libero. Integer imperdiet velit vitae nibh rhoncus, in convallis nunc semper. Curabitur pulvinar urna dignissim quam pretium ultricies. In auctor auctor magna, quis elementum arcu congue non."
    },
]

const App = () => {
    return (
        <div>
            <Navbar />
            <About>
                <hr />
            </About>
            {/* use HOF + no if-else*/}
            {
                section_content.map((data, idx) => (
                    <Section
                        title={data.title}
                        content_1={data.content_1}
                        content_2={data.content_2}
                    >
                        {idx != section_content.length - 1 ? <hr /> : ""}
                    </Section>
                ))
            }
            <Footer />
        </div>
    )
}
export default App