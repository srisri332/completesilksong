"use client";

import { useEffect, useMemo, useState } from "react";
import { categories, getTotalPercent } from "@/data/silksong";

const COOKIE_KEY = "silksong_checked";
const COOKIE_DAYS = 3650;
const BANNER_HIDDEN_KEY = "banner_hidden";

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()!.split(";").shift() || null;
  return null;
}

function writeCookie(name: string, value: string, days: number): void {
  if (typeof document === "undefined") return;
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Lax`;
}

export default function Home() {
  const allIds = useMemo(
    () => categories.flatMap((c) => c.items.map((i) => i.id)),
    []
  );
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [showBanner, setShowBanner] = useState(false); // Start as false to prevent flash

  useEffect(() => {
    const raw = readCookie(COOKIE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(decodeURIComponent(raw)) as Record<
          string,
          boolean
        >;
        setChecked(parsed);
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    const bannerHidden = readCookie(BANNER_HIDDEN_KEY);
    console.log('Banner hidden cookie value:', bannerHidden); // Debug log
    setShowBanner(bannerHidden !== "true");
  }, []);

  useEffect(() => {
    const toSave: Record<string, boolean> = {};
    for (const id of allIds) {
      if (checked[id]) toSave[id] = true;
    }
    writeCookie(
      COOKIE_KEY,
      encodeURIComponent(JSON.stringify(toSave)),
      COOKIE_DAYS
    );
  }, [checked, allIds]);

  const totalPercent = useMemo(() => {
    return categories
      .flatMap((c) => c.items)
      .reduce((acc, item) => (checked[item.id] ? acc + item.percent : acc), 0);
  }, [checked]);

  function toggle(id: string) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function resetAll() {
    if (typeof window !== "undefined") {
      const confirmed = window.confirm(
        "Reset all progress? This cannot be undone."
      );
      if (!confirmed) return;
    }
    setChecked({});
    writeCookie(
      COOKIE_KEY,
      encodeURIComponent(JSON.stringify({})),
      COOKIE_DAYS
    );
  }

  function hideBanner() {
    setShowBanner(false);
    writeCookie(BANNER_HIDDEN_KEY, "true", COOKIE_DAYS);
  }

  const maxPercent = getTotalPercent();
  const progress = Math.min(100, Math.max(0, totalPercent));

  return (
    <>
      {showBanner && (
        <div className='w-full bg-stone-800 border-b border-stone-600 py-3 px-4'>
          <div className='mx-auto max-w-5xl flex items-center justify-center gap-3'>
            <p className='text-sm text-stone-200'>
              This website uses cookies to remember your progress
            </p>
            <button
              onClick={hideBanner}
              className='rounded-md border border-blue-500 bg-blue-500 px-3 py-1 text-xs text-white hover:bg-blue-700 transition-colors'
            >
              Hide
            </button>
          </div>
        </div>
      )}
      <main className='min-h-screen bg-silksong text-stone-100'>
      <div className='mx-auto max-w-5xl px-4 py-8'>
        <div className='mb-4 flex justify-center'>
          <img
            src='/hkss-logo.png'
            alt='Silksong logo'
            className='h-45 w-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.45)]'
          />
        </div>
        <header className='mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
          <div>
            {/* <h1 className="text-2xl font-bold">Completion Checklist</h1> */}
          </div>
          <div className='hidden items-center gap-3 sm:flex' />
        </header>

        <div className='mb-6 rounded-lg border border-stone-600 bg-stone-700/50 p-4'>
          <p className='text-sm text-stone-200'>
            To view your completion percentage in-game, you need to obtain{" "}
            <a
              href='https://hollowknightsilksong.wiki.fextralife.com/Farsight'
              target='_blank'
              rel='noreferrer'
              className='text-[#ff4f56] hover:underline'>
              Farsight
            </a>{" "}
            in{" "}
            <a
              href='https://www.ign.com/wikis/hollow-knight-silksong/How_to_Unlock_Act_3'
              target='_blank'
              rel='noreferrer'
              className='text-[#ff4f56] hover:underline'>
              Act3
            </a>{" "}
            from the Abyss.
          </p>
        </div>

        <section className='mb-8'>
          <div className='mb-2 text-center'>
            <p className='text-sm text-stone-400 italic'>
              Note: This list is still being updated as more information becomes
              available
            </p>
          </div>
          <div className='mb-1 flex items-center justify-between'>
            <span className='text-stone-300'>PROGRESS</span>
            <div className='flex items-center gap-3'>
              <span className='font-medium'>
                {progress}%/{maxPercent}%
              </span>
              <button
                onClick={resetAll}
                className='rounded-md border border-[#ff4f56]/30 bg-[#ff4f56] px-3 py-1.5 text-xs text-stone-100 shadow-sm shadow-[#ff4f56]/30 hover:bg-stone-600'>
                Reset
              </button>
            </div>
          </div>
          <div className='h-3 w-full rounded bg-stone-700'>
            <div
              className='h-3 rounded bg-[#ff4f56] transition-all'
              style={{ width: `${(progress / maxPercent) * 100}%` }}
            />
          </div>
        </section>

        <div className='columns-1 md:columns-2 gap-6'>
          {categories.map((cat) => {
            const catTotal = cat.items.reduce((acc, it) => acc + it.percent, 0);
            const catDone = cat.items.reduce(
              (acc, it) => (checked[it.id] ? acc + it.percent : acc),
              0
            );
            return (
              <section
                key={cat.id}
                className='mb-6 break-inside-avoid rounded-lg border border-stone-700 bg-stone-900/50 shadow-md shadow-amber-900/30'>
                <div className='flex items-center justify-between border-b border-stone-700 bg-stone-900/40 px-4 py-3'>
                  <h2 className='text-lg font-semibold text-stone-100'>
                    {cat.title}
                  </h2>
                  <span className='text-base text-amber-300'>
                    {catDone} / {catTotal}%
                  </span>
                </div>
                <ul className='divide-y divide-stone-700'>
                  {cat.items.map((item) => (
                    <li
                      key={item.id}
                      className='flex items-center gap-3 px-4 py-3 transition-colors hover:bg-stone-800/40'>
                      <input
                        id={item.id}
                        type='checkbox'
                        className='h-4 w-4 accent-[#ff4f56]'
                        checked={!!checked[item.id]}
                        onChange={() => toggle(item.id)}
                      />
                      <label
                        htmlFor={item.id}
                        className='flex-1 cursor-pointer select-none text-base'>
                        {item.link ? (
                          <a
                            href={item.link}
                            target='_blank'
                            rel='noreferrer'
                            className='underline'
                            onClick={(e) => e.stopPropagation()}>
                            {item.label}
                          </a>
                        ) : (
                          item.label
                        )}
                      </label>
                      <span className='text-xs text-stone-300'>
                        +{item.percent}%
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>

      <footer
        className='mt-16 border-t border-stone-700 bg-stone-900/30 py-8'
        style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <div className='mx-auto max-w-5xl px-4 text-center text-xs text-stone-300'>
          <p className='mb-2'>
            This is a fan project; I am not affiliated with{" "}
            <a
              href='https://www.teamcherry.com.au/'
              target='_blank'
              rel='noreferrer'
              className='text-[#ff4f56] hover:underline'>
              Team Cherry
            </a>
            .
          </p>
          <p className='mb-4'>
            Buy{" "}
            <a
              href='https://hollowknightsilksong.com/'
              target='_blank'
              rel='noreferrer'
              className='text-[#ff4f56] hover:underline'>
              Silk Song
            </a>
            , it&apos;s AWESOME.
          </p>
          <p className='text-xs text-stone-400'>
            Inspired by{" "}
            <a
              className='underline hover:text-stone-300'
              href='https://hollowknightchecklist.com/'
              target='_blank'
              rel='noreferrer'>
              Hollow Knight Checklist
            </a>
          </p>
        </div>
      </footer>
    </main>
    </>
  );
}
