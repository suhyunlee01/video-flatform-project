export const Recommended = (req, res) =>{
    const videos = [
        {
            title: "birb #1",
            rating: 5,
            comment: 2,
            createdAt: "1 min ago",
            views: 5000,
            id:1,
        },
        {
            title: "birb #2",
            rating: 4,
            comment: 5,
            createdAt: "1 min ago",
            views: 5000,
            id:1,
        },
        {
            title: "birb #3",
            rating: 3,
            comment: 6,
            createdAt: "1 min ago",
            views: 5000,
            id:1,
        }
    ];
    res.render("home", { pageTitle: "Home", videos });
}
export const search =(req, res) => res.send("Search Video");

export const edit = (req, res) => res.render("edit");
export const deleteVideo =(req, res) => res.send("remove Video");
export const upload =(req, res) => res.send("upload Video");
export const seeVideo = (req, res) => res.render("watch");

