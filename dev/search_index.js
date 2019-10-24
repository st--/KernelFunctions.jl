var documenterSearchIndex = {"docs":
[{"location":"metrics/#Metrics-1","page":"Metrics","title":"Metrics","text":"","category":"section"},{"location":"metrics/#","page":"Metrics","title":"Metrics","text":"KernelFunctions.jl relies on Distances.jl for computing the pairwise matrix. To do so a distance measure is needed for each kernel. Two very common ones can already be used : SqEuclidean and Euclidean. However all kernels do not rely on distances metrics respecting all the definitions. That's why two additional metrics come with the package : DotProduct (<x,y>) and Delta (δ(x,y)). If you want to create a new distance just implement the following :","category":"page"},{"location":"metrics/#","page":"Metrics","title":"Metrics","text":"struct Delta <: Distances.PreMetric\nend\n\n@inline function Distances._evaluate(::Delta,a::AbstractVector{T},b::AbstractVector{T}) where {T}\n    @boundscheck if length(a) != length(b)\n        throw(DimensionMismatch(\"first array has length $(length(a)) which does not match the length of the second, $(length(b)).\"))\n    end\n    return a==b\nend\n\n@inline (dist::Delta)(a::AbstractArray,b::AbstractArray) = Distances._evaluate(dist,a,b)\n@inline (dist::Delta)(a::Number,b::Number) = a==b","category":"page"},{"location":"kernels/#","page":"Kernel Functions","title":"Kernel Functions","text":"CurrentModule = KernelFunctions","category":"page"},{"location":"kernels/#Exponential-Kernels-1","page":"Kernel Functions","title":"Exponential Kernels","text":"","category":"section"},{"location":"kernels/#","page":"Kernel Functions","title":"Kernel Functions","text":"ExponentialKernel\nSqExponentialKernel\nGammaExponentialKernel","category":"page"},{"location":"kernels/#KernelFunctions.ExponentialKernel","page":"Kernel Functions","title":"KernelFunctions.ExponentialKernel","text":"ExponentialKernel([ρ=1.0])\n\nThe exponential kernel is an isotropic Mercer kernel given by the formula:\n\n    κ(x,y) = exp(-‖x-y‖)\n\n\n\n\n\n","category":"type"},{"location":"kernels/#Matern-Kernels-1","page":"Kernel Functions","title":"Matern Kernels","text":"","category":"section"},{"location":"kernels/#","page":"Kernel Functions","title":"Kernel Functions","text":"MaternKernel\nMatern32Kernel\nMatern52Kernel","category":"page"},{"location":"kernels/#Polynomial-Kernels-1","page":"Kernel Functions","title":"Polynomial Kernels","text":"","category":"section"},{"location":"kernels/#","page":"Kernel Functions","title":"Kernel Functions","text":"LinearKernel\nPolynomialKernel","category":"page"},{"location":"kernels/#Constant-Kernels-1","page":"Kernel Functions","title":"Constant Kernels","text":"","category":"section"},{"location":"kernels/#","page":"Kernel Functions","title":"Kernel Functions","text":"ConstantKernel\nWhiteKernel\nZeroKernel","category":"page"},{"location":"kernels/#KernelFunctions.ConstantKernel","page":"Kernel Functions","title":"KernelFunctions.ConstantKernel","text":"ConstantKernel([tr=IdentityTransform(),[c=1.0]])\n\n    κ(x,y) = c\n\nKernel function always returning a constant value `c`\n\n\n\n\n\n","category":"type"},{"location":"kernels/#KernelFunctions.WhiteKernel","page":"Kernel Functions","title":"KernelFunctions.WhiteKernel","text":"WhiteKernel([tr=IdentityTransform()])\n\n    κ(x,y) = δ(x,y)\n\nKernel function working as an equivalent to add white noise.\n\n\n\n\n\n","category":"type"},{"location":"kernels/#KernelFunctions.ZeroKernel","page":"Kernel Functions","title":"KernelFunctions.ZeroKernel","text":"ZeroKernel([tr=IdentityTransform()])\n\nCreate a kernel that always return a zero kernel matrix\n\n\n\n\n\n","category":"type"},{"location":"api/#API-Library-1","page":"API","title":"API Library","text":"","category":"section"},{"location":"api/#","page":"API","title":"API","text":"","category":"page"},{"location":"api/#","page":"API","title":"API","text":"Pages = [\"api.md\"]","category":"page"},{"location":"api/#","page":"API","title":"API","text":"CurrentModule = KernelFunctions","category":"page"},{"location":"api/#Module-1","page":"API","title":"Module","text":"","category":"section"},{"location":"api/#","page":"API","title":"API","text":"KernelFunctions","category":"page"},{"location":"api/#Kernel-Functions-1","page":"API","title":"Kernel Functions","text":"","category":"section"},{"location":"api/#","page":"API","title":"API","text":"SqExponentialKernel\nExponential\nGammaExponentialKernel\nExponentiatedKernel\nMaternKernel\nMatern32Kernel\nMatern52Kernel\nLinearKernel\nPolynomialKernel\nRationalQuadraticKernel\nGammaRationalQuadraticKernel","category":"page"},{"location":"api/#KernelFunctions.SqExponentialKernel","page":"API","title":"KernelFunctions.SqExponentialKernel","text":"SqExponentialKernel([ρ=1.0])\n\nThe squared exponential kernel is an isotropic Mercer kernel given by the formula:\n\n    κ(x,y) = exp(-‖x-y‖²)\n\nSee also ExponentialKernel for a related form of the kernel or GammaExponentialKernel for a generalization.\n\n\n\n\n\n","category":"type"},{"location":"api/#KernelFunctions.GammaExponentialKernel","page":"API","title":"KernelFunctions.GammaExponentialKernel","text":"GammaExponentialKernel([ρ=1.0,[gamma=2.0]])\n\nThe γ-exponential kernel is an isotropic Mercer kernel given by the formula:\n\n    κ(x,y) = exp(-‖x-y‖^2γ)\n\n\n\n\n\n","category":"type"},{"location":"api/#KernelFunctions.ExponentiatedKernel","page":"API","title":"KernelFunctions.ExponentiatedKernel","text":"ExponentiatedKernel([ρ=1])\n\nThe exponentiated kernel is a Mercer kernel given by:\n\n        κ(x,y) = exp(xᵀy)\n\n\n\n\n\n","category":"type"},{"location":"api/#KernelFunctions.MaternKernel","page":"API","title":"KernelFunctions.MaternKernel","text":"MaternKernel([ρ=1.0,[ν=1.0]])\n\nThe matern kernel is an isotropic Mercer kernel given by the formula:\n\n    κ(x,y) = 2^{1-ν}/Γ(ν)*(√(2ν)‖x-y‖)^ν K_ν(√(2ν)‖x-y‖)\n\nFor ν=n+1/2, n=0,1,2,... it can be simplified and you should instead use ExponentialKernel for n=0, Matern32Kernel, for n=1, Matern52Kernel for n=2 and SqExponentialKernel for n=∞. ρ is the lengthscale parameter(s) or the transform object.\n\n\n\n\n\n","category":"type"},{"location":"api/#KernelFunctions.Matern32Kernel","page":"API","title":"KernelFunctions.Matern32Kernel","text":"Matern32Kernel([ρ=1.0])\n\nThe matern 3/2 kernel is an isotropic Mercer kernel given by the formula:\n\n    κ(x,y) = (1+√(3)‖x-y‖)exp(√(3)‖x-y‖)\n\nρ is the lengthscale parameter(s) or a transform object.\n\n\n\n\n\n","category":"type"},{"location":"api/#KernelFunctions.Matern52Kernel","page":"API","title":"KernelFunctions.Matern52Kernel","text":"Matern52Kernel([ρ=1.0])\n\nThe matern 5/2 kernel is an isotropic Mercer kernel given by the formula:\n\n    κ(x,y) = (1+√(5)‖x-y‖ + 5‖x-y‖^2/3)exp(√(5)‖x-y‖)\n\nρ is the lengthscale parameter(s) or a transform object.\n\n\n\n\n\n","category":"type"},{"location":"api/#KernelFunctions.LinearKernel","page":"API","title":"KernelFunctions.LinearKernel","text":"LinearKernel([ρ=1.0,[c=0.0]])\n\nThe linear kernel is a Mercer kernel given by\n\n    κ(x,y) = xᵀy + c\n\nWhere `c` is a real number\n\n\n\n\n\n","category":"type"},{"location":"api/#KernelFunctions.PolynomialKernel","page":"API","title":"KernelFunctions.PolynomialKernel","text":"PolynomialKernel([ρ=1.0[,d=2.0[,c=0.0]]])\n\nThe polynomial kernel is a Mercer kernel given by\n\n    κ(x,y) = (xᵀy + c)^d\n\nWhere `c` is a real number, and `d` is a shape parameter bigger than 1\n\n\n\n\n\n","category":"type"},{"location":"api/#KernelFunctions.RationalQuadraticKernel","page":"API","title":"KernelFunctions.RationalQuadraticKernel","text":"RationalQuadraticKernel([ρ=1.0[,α=2.0]])\n\nThe rational-quadratic kernel is an isotropic Mercer kernel given by the formula:\n\n    κ(x,y)=(1+||x−y||^2/α)^(-α)\n\nwhere `α` is a shape parameter of the Euclidean distance. Check `GammaRationalQuadraticKernel` for a generalization.\n\n\n\n\n\n","category":"type"},{"location":"api/#KernelFunctions.GammaRationalQuadraticKernel","page":"API","title":"KernelFunctions.GammaRationalQuadraticKernel","text":"GammaRationalQuadraticKernel([ρ=1.0[,α=2.0[,γ=2.0]]])\n\nThe Gamma-rational-quadratic kernel is an isotropic Mercer kernel given by the formula:\n\n    κ(x,y)=(1+||x−y||^(2γ)/α)^(-α)\n\nwhere α is a shape parameter of the Euclidean distance and γ is another shape parameter.\n\n\n\n\n\n","category":"type"},{"location":"api/#Kernel-Combinations-1","page":"API","title":"Kernel Combinations","text":"","category":"section"},{"location":"api/#","page":"API","title":"API","text":"KernelSum\nKernelProduct","category":"page"},{"location":"api/#KernelFunctions.KernelSum","page":"API","title":"KernelFunctions.KernelSum","text":"KernelSum(kernels::Array{Kernel};weights::Array{Real}=ones(length(kernels)))\n\nCreate a positive weighted sum of kernels. One can also use the operator +\n\n    kernelmatrix(SqExponentialKernel()+LinearKernel(),X) == kernelmatrix(SqExponentialKernel(),X).+kernelmatrix(LinearKernel(),X)\n\n\n\n\n\n","category":"type"},{"location":"api/#KernelFunctions.KernelProduct","page":"API","title":"KernelFunctions.KernelProduct","text":"KernelProduct(kernels::Array{Kernel})\n\nCreate a multiplication of kernels. One can also use the operator *\n\n    kernelmatrix(SqExponentialKernel()*LinearKernel(),X) == kernelmatrix(SqExponentialKernel(),X).*kernelmatrix(LinearKernel(),X)\n\n\n\n\n\n","category":"type"},{"location":"api/#Transforms-1","page":"API","title":"Transforms","text":"","category":"section"},{"location":"api/#","page":"API","title":"API","text":"Transform\nIdentityTransform\nScaleTransform\nLowRankTransform\nFunctionTransform","category":"page"},{"location":"api/#KernelFunctions.IdentityTransform","page":"API","title":"KernelFunctions.IdentityTransform","text":"IdentityTransform\n\nReturn exactly the input\n\n\n\n\n\n","category":"type"},{"location":"api/#KernelFunctions.ScaleTransform","page":"API","title":"KernelFunctions.ScaleTransform","text":"Scale Transform\n\n    l = 2.0\n    tr = ScaleTransform(l)\n    v = rand(3)\n    tr = ScaleTransform(v)\n\nMultiply every element of the matrix by `l` for a scalar\nMultiply every vector of observation by `v` element-wise for a vector\n\n\n\n\n\n","category":"type"},{"location":"api/#KernelFunctions.LowRankTransform","page":"API","title":"KernelFunctions.LowRankTransform","text":"LowRankTransform\n```\n    P = rand(10,5)\n    tr = LowRankTransform(P)\n```\nApply the low-rank projection realised by the matrix `P`\nThe second dimension of `P` must match the number of features of the target.\n\n\n\n\n\n","category":"type"},{"location":"api/#KernelFunctions.FunctionTransform","page":"API","title":"KernelFunctions.FunctionTransform","text":"FunctionTransform\n\n    f(x) = abs.(x)\n    tr = FunctionTransform(f)\n\nTake a function `f` as an argument which is going to act on each vector individually.\nMake sure that `f` is supposed to act on a vector by eventually using broadcasting\nFor example `f(x)=sin(x)` -> `f(x)=sin.(x)`\n\n\n\n\n\n","category":"type"},{"location":"api/#Functions-1","page":"API","title":"Functions","text":"","category":"section"},{"location":"api/#","page":"API","title":"API","text":"kernelmatrix\nkernelmatrix!\nkerneldiagmatrix\nkerneldiagmatrix!\ntransform","category":"page"},{"location":"api/#KernelFunctions.kernelmatrix","page":"API","title":"KernelFunctions.kernelmatrix","text":"    kernelmatrix(κ::Kernel, X::Matrix ; obsdim::Int=2, symmetrize::Bool=true)\n\nCalculate the kernel matrix of X with respect to kernel κ. obsdim=1 means the matrix X has size #samples x #dimension obsdim=2 means the matrix X has size #dimension x #samples\n\n\n\n\n\n    kernelmatrix(κ::Kernel, X::Matrix, Y::Matrix; obsdim::Int=2)\n\nCalculate the base matrix of X and Y with respect to kernel κ. obsdim=1 means the matrices X and Y have sizes #samples x #dimension obsdim=2 means the matrices X and Y have size #dimension x #samples\n\n\n\n\n\n","category":"function"},{"location":"api/#KernelFunctions.kernelmatrix!","page":"API","title":"KernelFunctions.kernelmatrix!","text":"    kernelmatrix!(K::Matrix, κ::Kernel, X::Matrix; obsdim::Integer=2, symmetrize::Bool=true)\n\nIn-place version of kernelmatrix where pre-allocated matrix K will be overwritten with the kernel matrix.\n\n\n\n\n\n    kernelmatrix!(K::Matrix, κ::Kernel, X::Matrix, Y::Matrix; obsdim::Integer=2)\n\nIn-place version of kernelmatrix where pre-allocated matrix K will be overwritten with the kernel matrix.\n\n\n\n\n\n","category":"function"},{"location":"api/#KernelFunctions.kerneldiagmatrix","page":"API","title":"KernelFunctions.kerneldiagmatrix","text":"    kerneldiagmatrix(κ::Kernel, X::Matrix; obsdim::Int=2)\n\nCalculate the diagonal matrix of X with respect to kernel κ obsdim=1 means the matrix X has size #samples x #dimension obsdim=2 means the matrix X has size #dimension x #samples\n\n\n\n\n\n","category":"function"},{"location":"api/#KernelFunctions.kerneldiagmatrix!","page":"API","title":"KernelFunctions.kerneldiagmatrix!","text":"    kerneldiagmatrix!(K::AbstractVector,κ::Kernel, X::Matrix; obsdim::Int=2)\n\nIn place version of kerneldiagmatrix\n\n\n\n\n\n","category":"function"},{"location":"api/#Index-1","page":"API","title":"Index","text":"","category":"section"},{"location":"api/#","page":"API","title":"API","text":"Pages = [\"api.md\"]\nModule = [\"KernelFunctions\"]\nOrder = [:type, :function]","category":"page"},{"location":"transform/#Transform-1","page":"Transform","title":"Transform","text":"","category":"section"},{"location":"transform/#","page":"Transform","title":"Transform","text":"Transform is the object that takes care of transforming the input data before distances are being computed. It can be as standard as IdentityTransform returning the same input, can be a scalar with ScaleTransform multiplying the vectors by a scalar or a vector. There is a more general Transform: FunctionTransform that uses a function and apply it on each vector via mapslices. You can also create a pipeline of Transform via TransformChain. For example LowRankTransform(rand(10,5))∘ScaleTransform(2.0).","category":"page"},{"location":"transform/#","page":"Transform","title":"Transform","text":"One apply a transformation on a matrix or a vector via transform(t::Transform,v::AbstractVecOrMat)","category":"page"},{"location":"transform/#Transforms-:-1","page":"Transform","title":"Transforms :","text":"","category":"section"},{"location":"transform/#","page":"Transform","title":"Transform","text":"  IdentityTransform\n  ScaleTransform\n  LowRankTransform\n  FunctionTransform\n  ChainTransform","category":"page"},{"location":"transform/#KernelFunctions.ChainTransform","page":"Transform","title":"KernelFunctions.ChainTransform","text":"ChainTransform\n```\n    t1 = ScaleTransform()\n    t2 = LowRankTransform(rand(3,4))\n    ct = ChainTransform([t1,t2]) #t1 will be called first\n    ct == t2∘t1\n```\nChain a series of transform, here `t1` is called first\n\n\n\n\n\n","category":"type"},{"location":"userguide/#Building-kernel-and-matrices-easily!-1","page":"User Guide","title":"Building kernel and matrices easily!","text":"","category":"section"},{"location":"#KernelFunctions.jl-1","page":"Home","title":"KernelFunctions.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Model agnostic kernel functions compatible with automatic differentiation","category":"page"},{"location":"#","page":"Home","title":"Home","text":"*** In Construction ***","category":"page"}]
}
