from setuptools import setup, Extension
from Cython.Build import cythonize


with open("README.md", "r") as file:
    long_description = file.read()


dev_status = {
    "Planning": "Development Status :: 1 - Planning",
    "Pre": "Development Status :: 2 - Pre-Alpha",
    "Alpha": "Development Status :: 3 - Alpha",
    "Beta": "Development Status :: 4 - Beta",
    "Pro": "Development Status :: 5 - Production/Stable",
    "Mature": "Development Status :: 6 - Mature",
    "Inactive": "Development Status :: 7 - Inactive",
}

setup(
    name="LambdaData",
    ext_modules=cythonize(
        Extension(
            name="LambdaData",
            sources=["LambdaData.pyx"],
            language=["c++"],
            extra_compile_args=["-std=c++17"],
        ),
        compiler_directives={
            "embedsignature": True,
            "language_level": 3,
        },
    ),
    packages=["LambdaDataTests"],
    author="Robert Sharp",
    author_email="webmaster@sharpdesigndigital.com",
    install_requires=["pandas", "MonkeyScope"],
    version="0.1.16",
    description="Data Science Iterator Algorithm Library",
    long_description=long_description,
    long_description_content_type="text/markdown",
    license="Free for non-commercial use",
    platforms=["Darwin", "Linux"],
    classifiers=[
        dev_status["Beta"],
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Cython",
        "Topic :: Software Development :: Libraries :: Python Modules",
    ],
    keywords=[
        "Lambda School", "Data Science Algorithm",
        "accumulate", "adjacent_difference", "all_of", "any_of", "difference",
        "exclusive_scan", "fork", "generate", "generate_n", "inclusive_scan",
        "inner_product", "intersection", "iota", "min_max", "none_of",
        "partial_sum", "partition", "product", "reduce", "star_sum",
        "star_product", "symmetric_difference", "transform", "transform_reduce",
        "transposed_sums", "union", "zip_transform", "matrix_multiply"
        "value_span", "star_cat_row", "star_cat_col", "random_range",
        "shuffle", "TruffleShuffle", "StateLookup",
    ],
    python_requires=">=3.6",
)
