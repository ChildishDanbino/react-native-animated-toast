import React, { Component } from 'react';
import { Animated, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

const AnimatedView = Animated.createAnimatedComponent(TouchableOpacity);

export default class AnimatedNotification extends Component {
	constructor(props) {
		super(props);
		this.showNotification = this.showNotification.bind(this);
		this.hideNotification = this.hideNotification.bind(this);

		this.state = {
			top: new Animated.Value(-100),
			visible: props.visible
		};
	}

	componentWillReceiveProps(nextProps) {
		const displayNotification = !this.props.visible && nextProps.visible;
		const hideNotification = this.props.visible && !nextProps.visible;
		if (displayNotification) {
			this.showNotification();
		} else if (hideNotification) {
			this.hideNotification();
		}
	}

	showNotification() {
		const { topPosition, hideDuration } = this.props;
		Animated.timing(this.state.top, {
			toValue: topPosition,
			duration: 250
		}).start();

		// Hide the notification automatically after hideDuration is reached
		setTimeout(() => this.hideNotification(), hideDuration);
	}

	hideNotification() {
		this.setState({ visible: false }, () => {
			Animated.timing(this.state.top, {
			toValue: -100,
			duration: 250
		}).start();
		});
	}

	render() {
		const { message } = this.props;
		return (
			<AnimatedView onPress={this.hideNotification} style={{ top: this.state.top }}>
				<Text>{message}</Text>
			</AnimatedView>
	);
	}
}

AnimatedNotification.propTypes = {
	message: PropTypes.string,
	visible: PropTypes.bool
};

AnimatedNotification.defaultProps = {
	visible: false,
	message: null
};

