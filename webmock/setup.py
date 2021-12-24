from setuptools import setup
from codecs import open
from os import path

import versioneer
versioneer.VCS = 'git'
versioneer.versionfile_source = 'webmock/_version.py'
versioneer.versionfile_build = 'webmock/_version.py'
versioneer.tag_prefix = ''
versioneer.parentdir_prefix = 'webmock-'

here = path.abspath(path.dirname(__file__))

with open(path.join(here, 'README.rst'), encoding='utf-8') as f:
    long_description = f.read()

setup(
    name='webmock',
    version=versioneer.get_version(),
    cmdclass=versioneer.get_cmdclass(),
    description='Mock web server for testing web clients',
    long_description=long_description,
    #url='https://github.com/pypa/sampleproject',
    author='Dustin J. Mitchell',
    author_email='dustin@v.igoro.us',
    license='MIT',
    classifiers=[
        'Development Status :: 4 - Beta',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python :: 2',
        'Programming Language :: Python :: 2.6',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.2',
        'Programming Language :: Python :: 3.3',
        'Programming Language :: Python :: 3.4',
    ],
    keywords='mock testing web http',
    packages=['webmock'],
    extras_require={
        'test': ['nose', 'coverage', 'tox'],
    },
)
