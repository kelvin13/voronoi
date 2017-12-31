#version 330 core

in V_OUT
{
    vec3 color;
} vertex;

out vec4 color;

void main()
{
    color = vec4(vertex.color, 1);
}