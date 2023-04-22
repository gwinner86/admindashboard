import Image from "next/image";
import Link from "next/link";
import React from "react";

function Features() {
  return (
    <div>
      <div className="feature-bg-img">
        <div className="hidden  lg:flex flex-col mx-48 lg:py-48 justify-around">
          <h3 className="uppercase mb-3">THE WAY TO GO</h3>
          <p className="text-3xl font-semibold mb-8">
            Send money and make <br /> purchases at approved <br /> merchants.
          </p>
          <div className="flex items-center gap-x-4">
            <div>
              <Link href="/" target="_blank">
                <Image
                  alt="Android download"
                  src="/img/download_android.svg"
                  width={160}
                  height={150}
                />
              </Link>
            </div>
            <div>
              <Link href="/" target="_blank">
                <Image
                  alt="Ios download"
                  src="/img/download_ios.svg"
                  width={150}
                  height={120}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-tl-3xl lg:hidden">
        <div className="flex flex-col items-center justify-center py-10">
          <h3 className="uppercase mb-3">THE WAY TO GO</h3>
          <p className="text-3xl font-semibold mb-8 text-center">
            Send money and make <br /> purchases at approved <br /> merchants.
          </p>
          <div className="flex items-center gap-x-4">
            <div>
              <Link href="/" target="_blank">
                <Image
                  alt="Android download"
                  src="/img/download_android.svg"
                  width={160}
                  height={150}
                />
              </Link>
            </div>
            <div>
              <Link href="/" target="_blank">
                <Image
                  alt="Ios download"
                  src="/img/download_ios.svg"
                  width={150}
                  height={120}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
