# Time tracking dashboard

> π This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw).

## π β¨ π Have Fun Building! π π π
> π₯οΈ **Welcome** <br>
> Thanks for checking out this front-end coding challenge.
[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.
***To do this challenge, you need a basic understanding of HTML, CSS and JavaScript.*** Press <kbd>Enter</kbd> π to start the game!!

## πTable of Contents
- [Brief](#brief)
- [The challenge](#the-challenge)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned-)
- [Difficult Things](#difficult-things-)
- [Author](#author)

## Brief
A perfect opportunity to practice your CSS Grid skills. For anyone wanting to take it up a notch, we provide a JSON data file to practice working with data.

This challenge is perfect if you're looking to test your CSS Grid chops. Even without Grid, this project will be a fun one to help you practice your layout skills!
Your challenge is to build out this **dashboard** and get it looking as close to the design as possible.
You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go π.

If you would like to practice working with JSON data, we provide a local `data.json` file for the activities. This means you'll be able to pull the data from there instead of using the content in the `.html` file.

**Preview** :eyeglasses:

![Design preview for the Loopstudios landing page coding challenge](./src/assets/overview.png)

## The challenge 
Users should be able to:
  
| Challenge | Newbie | Junior | Intermediate | Advanced |
| --- | :---: | :---: | :---: | :---: |
| View the optimal layout for the site depending on their device's screen size |  | β­ |  |  |
| See hover states for all interactive elements on the page | β­ |  |  |  |
| Switch between viewing Daily, Weekly, and Monthly stats |  | β­ |  |  |

[![π¬ Junior Difficulty List](https://img.shields.io/badge/Difficulty-Junior-3F54A3?style=for-the-badge&logo=frontendmentor "Junior Difficulty")](https://www.frontendmentor.io/challenges?difficulties=2)

## Links
- Solution URL: [Here](https://www.frontendmentor.io/solutions/femtimetrackingdashboard-ujF6vcWFM)
- Live Site URL: [Here](https://time-tracking-dashboard-xvferdy.netlify.app/ "Live")

## My process
> β I challenge my self to finish this for ***~3 days*** <br>
> β <br>
> π§βπ» ***Day 1.*** Folder structure & basic [Sass](https://sass-lang.com/) boilerplate <kbd>~2 hours</kbd> <br>
> β <br>
> π§βπ» ***Day 2.*** [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) skeleton <kbd>~2.5 hours</kbd> <br>
> β <sub>Plus starting making a very basic layout using `grid` </sub> <br>
> β <br>
> π­ ***Day 3.*** [Javascript](https://www.javascript.com/) day<br>
> β <sub>Working with JSON file <kbd>~4 hours</kbd></sub> <br>
> β <br>
> π ***Day 3.*** Submit to [**Frontend Mentor**](https://www.frontendmentor.io/solutions/femtimetrackingdashboard-ujF6vcWFM "Solution") π© <br>
> β <sub>Add some [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) for coloring <kbd>~3 hours</kbd></sub> <br>
> β <br>
> ποΈ ***Day 4-5.*** Continuing incomplete design <br>
> β <sub>Try to fix buggy style <kbd>~6.5 hours</kbd></sub> <br>
> β <sub>Responsive design <kbd>~3 hours</kbd></sub> <br>
> β <sub>Tried to figuring out how to add animation <kbd>~1 day</kbd></sub> <br>
> β <br>
> ποΈ 

## Built with
- [React](https://reactjs.org/ "React js")

## What I learned π₯³
Learn how to change background opacity without affecting text. π `rgba($color: #000000, $alpha: 1.0)`

###### src/stylesheets/components/\_card.scss
```scss
&__content {
  margin-top: 21px;
  background: rgba($dark-blue, 1);
  height: 80%;
  width: 100%;
  position: absolute;
  bottom: 0;
  &:hover {
    background: rgba($dark-blue, 0.5);
  }
}
```

## Difficult Things π΅βπ«
Things were difficult for me and I finally gave up π€
- [ ] `grid`
- [ ] Mobile view

## Author
| [<img src="https://avatars.githubusercontent.com/u/47988956?v=4" alt="xvferdy" width="100px"/><br><sub><samp>Berlianto</samp></sub>](https://github.com/xvferdy)  |
|:---:|

<h3 align="right">
      <a href="#time-tracking-dashboard">To Top βͺ</a>
</h3>
