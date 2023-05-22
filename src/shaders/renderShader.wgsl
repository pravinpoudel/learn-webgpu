struct Vertex{
    @location(0) Position: vec3<f32>,
    @location(1) Color: vec4<f32>
};

struct Out{
    @builtin(position) Position: vec4<f32>,
    @location(0) Color: vec4<f32>
}

@vertex
fn main()->Out{
    var out:Out;
    return out
}