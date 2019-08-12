// c: change
const c = 1
// d: duration
const d = 1
// b: begin
const b = 0
// p: progress

// quad
function quadIn(p) {
    return c * (p /= d) * p + b
}
function quadOut(p) {
    return -c * (p /= d) * (p - 2) + b
}
function quadInOut(p) {
    if ((p /= d / 2) < 1) return (c / 2) * p * p + b
    return (-c / 2) * (--p * (p - 2) - 1) + b
}

// cubic
function cubicIn(p) {
    return c * (p /= d) * p * p + b
}
function cubicOut(p) {
    return c * ((p = p / d - 1) * p * p + 1) + b
}
function cubicInOut(p) {
    if ((p /= d / 2) < 1) return (c / 2) * p * p * p + b
    return (c / 2) * ((p -= 2) * p * p + 2) + b
}

// quart
function quartIn(p) {
    return c * (p /= d) * p * p * p + b
}
function quartOut(p) {
    return -c * ((p = p / d - 1) * p * p * p - 1) + b
}
function quartInOut(p) {
    if ((p /= d / 2) < 1) return (c / 2) * p * p * p * p + b
    return (-c / 2) * ((p -= 2) * p * p * p - 2) + b
}

// quint
function quintIn(p) {
    return c * (p /= d) * p * p * p * p + b
}
function quintOut(p) {
    return c * ((p = p / d - 1) * p * p * p * p + 1) + b
}
function quintInOut(p) {
    if ((p /= d / 2) < 1) return (c / 2) * p * p * p * p * p + b
    return (c / 2) * ((p -= 2) * p * p * p * p + 2) + b
}

// sine
function sineIn(p) {
    return -c * Math.cos((p / d) * (Math.PI / 2)) + c + b
}
function sineOut(p) {
    return c * Math.sin((p / d) * (Math.PI / 2)) + b
}
function sineInOut(p) {
    return (-c / 2) * (Math.cos((Math.PI * p) / d) - 1) + b
}

// expo
function expoIn(p) {
    return p == 0 ? b : c * Math.pow(2, 10 * (p / d - 1)) + b
}
function expoOut(p) {
    return p == d ? b + c : c * (-Math.pow(2, (-10 * p) / d) + 1) + b
}
function expoInOut(p) {
    if (p == 0) return b
    if (p == d) return b + c
    if ((p /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (p - 1)) + b
    return (c / 2) * (-Math.pow(2, -10 * --p) + 2) + b
}

// circ
function circIn(p) {
    return -c * (Math.sqrt(1 - (p /= d) * p) - 1) + b
}
function circOut(p) {
    return c * Math.sqrt(1 - (p = p / d - 1) * p) + b
}
function circInOut(p) {
    if ((p /= d / 2) < 1) return (-c / 2) * (Math.sqrt(1 - p * p) - 1) + b
    return (c / 2) * (Math.sqrt(1 - (p -= 2) * p) + 1) + b
}

// back
function backIn(p, s) {
    if (s == undefined) s = 1.70158
    return c * (p /= d) * p * ((s + 1) * p - s) + b
}
function backOut(p, s) {
    if (s == undefined) s = 1.70158
    return c * ((p = p / d - 1) * p * ((s + 1) * p + s) + 1) + b
}
function backInOut(p, s) {
    if (s == undefined) s = 1.70158
    if ((p /= d / 2) < 1)
        return (c / 2) * (p * p * (((s *= 1.525) + 1) * p - s)) + b
    return (c / 2) * ((p -= 2) * p * (((s *= 1.525) + 1) * p + s) + 2) + b
}

export const easedProgress = {
    quadIn,
    quadOut,
    quadInOut,
    cubicIn,
    cubicOut,
    cubicInOut,
    quartIn,
    quartOut,
    quartInOut,
    quintIn,
    quintOut,
    quintInOut,
    sineIn,
    sineOut,
    sineInOut,
    expoIn,
    expoOut,
    expoInOut,
    circIn,
    circOut,
    circInOut,
    backIn,
    backOut,
    backInOut,
}

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
