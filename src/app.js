import styles from './styles/index.scss'
import $ from 'jquery'
import ScrollMagic from 'scrollmagic'
import TweenMax from 'gsap'
import 'imports?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import 'imports?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

$(function () { // wait for document ready

    // init scrollmagic
		const controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave'
			}
		})

    //Create a scene
    let Scene1 = new ScrollMagic.Scene({
      triggerElement: '#main'
    })
    .setClassToggle('.section-1', 'bg-blue')
    .addTo(controller)
    .addIndicators()


    let Scene2Tween = TweenMax.fromTo("#box1", 1,
			{left: 0},
			{left: '50%', width: '500px', height: '500px'}
		);

    let Scene2 = new ScrollMagic.Scene({
      triggerElement: '.section-1',
      duration: 1000,
      offset: -50
    })
    .setTween(Scene2Tween)
    .addTo(controller)
    .addIndicators()




	})
