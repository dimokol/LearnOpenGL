#version 330 core

// Outputs colors in RGBA
out vec4 FragColor;

uniform vec4 lightColor;
uniform float brightness;

void main()
{
	FragColor = lightColor * brightness;
}