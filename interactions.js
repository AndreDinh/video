var hover = (function()
{
    function mouseMoveF(e)
    {
        if(!this.show && this.classList.contains('hidden'))
        {
            this.classList.remove('hidden');
            return;
        }

        if(this.show.classList.contains('hidden'))
        {
            this.show.classList.remove('hidden');
            return;
        }
    }

    function mouseOutF(e)
    {
        if(!this.show)
        {
            this.classList.add('hidden');
            return;
        }

        this.show.classList.add('hidden');
    }

    function moveShow(el, show)
    {
        el.show = show;

        el.addEventListener('mousemove', mouseMoveF);
        el.addEventListener('mouseout', mouseOutF);

        show.addEventListener('mousemove', mouseMoveF);
        show.addEventListener('mouseout', mouseOutF);

        show.classList.add('hidden');
    }

    return {
        moveShow: moveShow,
        mouseOutF: mouseOutF,
        mouseMoveF: mouseMoveF
    };
})();
var aniamte = document.getElementById('email');
var about = document.getElementById('about');
var github = document.getElementById('github');
hover.moveShow(contact,email);
hover.moveShow(aboutLink,about);
hover.moveShow(project,github);
