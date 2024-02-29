
let root = document.querySelector('.root');
const h1 = React.createElement('h1', { className: 'heading' }, 'Topic Covered');
const pa = React.createElement('p', { className: 'para' }, 'The following is the list of all topics we cover in the MDN');
console.log(h1);

// ReactDOM.render(h1, root);

const data = [
    {
        link: 'Getting Started with the web',
        para: 'Provides a practical introduction to web development for complete beginners'
    },
    {
        link: 'HTML - Structuring the web',
        para: 'HTML is the language that we use to structures the different parts of our content and define what there meaning and purpose. This topics teaches in details.'
    },
    {
        link: 'CSS - Styling the web',
        para: 'CSS is the language that we use to style the content as well as behavior like animation.'
    }
]


// const link1 = React.createElement('a', {className: 'link', href:"#"} , data[0].link);
// const para1 = React.createElement('p', { className: 'para'}, data[0].para);

// const link2 = React.createElement('a', {className: 'link', href: '#'} , data[1].link);
// const para2 = React.createElement('p', { className: 'para'}, data[1].para);

// const link3 = React.createElement('a', {className: 'link', href: '#'} , data[2].link);
// const para3 = React.createElement('p', { className: 'para'}, data[2].para);


const AddData = () => {
    return (
        <div>
            {h1}
            {pa}
            {
                data.map((item, index) => {
                    return (
                        <div>
                            <a className='link' href='#'>{item.link}</a>
                            <p className='para'>{item.para}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

ReactDOM.render(<AddData />, root);